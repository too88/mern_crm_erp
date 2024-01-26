import { useAppContext } from "@/context/appContext";
import { useCrudContext } from "@/context/crudContext";
import useLanguage from "@/locale/useLanguage";
import { crud } from "@/redux/crudRedux/action";
import { selectDeletedItem } from "@/redux/crudRedux/selector";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DeleteModal({ config }) {
  const dispatch = useDispatch();
  const translate = useLanguage();
  const { current: currentResult, isLoading, isSuccess } = useSelector(selectDeletedItem);
  const { state, crudContextAction } = useCrudContext();
  const { appContextAction } = useAppContext();
  const { panel, readBox, modal } = crudContextAction;
  const { navMenu } = appContextAction;
  const { isModalOpen } = state;
  const [displayItem, setDisplayItem] = useState("");

  let {
    entity,
    deleteModalLabels,
    deleteMessage = translate("are_you_sure_you_want_to_delete"),
    modalTitle = translate("confirm"),
  } = config;

  const handleOk = () => {
    const id = currentResult._id;

    readBox.close();
    modal.close();
    panel.close();
    navMenu.collapse();

    dispatch(crud.delete({ entity, id }));
    // dispatch(crud.list({ entity }));
  };

  const handleCancel = () => {
    if (!isLoading) modal.close();
  };

  useEffect(() => {
    if (isSuccess) {
      modal.close();

      dispatch(crud.list({ entity }));
    }

    if (currentResult) {
      let labels = deleteModalLabels.map((x) => currentResult[x]).join(" ");

      setDisplayItem(labels);
    }
  }, [isSuccess, currentResult]);

  return (
    <Modal
      title={modalTitle}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={isLoading}
    >
      <p>
        {deleteMessage}
        &nbsp;
        <strong>{displayItem}</strong>
      </p>
    </Modal>
  );
}
