import CreateForm from "@/components/CreateForm";
import DataTable from "@/components/DataTable";
import DeleteModal from "@/components/DeleteModal";
import ReadItem from "@/components/ReadItem";
import SearchItem from "@/components/SearchItem";
import UpdateForm from "@/components/UpdateForm";
import { useCrudContext } from "@/context/crudContext";
import CrudLayout from "@/layout/CrudLayout";
import useLanguage from "@/locale/useLanguage";
import { crud } from "@/redux/crudRedux/action";
import { selectCurrentItem } from "@/redux/crudRedux/selector";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HeaderPanel = ({ config }) => {
  return (
    <Row gutter={8}>
      <Col className="gutter-row" span={24}>
        <SearchItem config={config} />
      </Col>
    </Row>
  );
};

function SidePanelTopContent({ config, formElements }) {
  const translate = useLanguage();
  const dispatch = useDispatch();
  const { crudContextAction, state } = useCrudContext();
  const { deleteModalLabels } = config;
  const { editBox, modal } = crudContextAction;
  const { isReadBoxOpen, isEditBoxOpen } = state;
  const { result: currentItem } = useSelector(selectCurrentItem);
  const [labels, setLabels] = useState("");

  const editItem = () => {
    dispatch(crud.currentAction({ actionType: "update", data: currentItem }));
    editBox.open();
  };

  const removeItem = () => {
    dispatch(crud.currentAction({ actionType: "delete", data: currentItem }));
    modal.open();
  };

  const show = isReadBoxOpen || isEditBoxOpen ? { opacity: 1 } : { opacity: 0 };

  useEffect(() => {
    if (currentItem) {
      const currentLabels = deleteModalLabels.map((x) => currentItem[x]).join(" ");

      setLabels(currentLabels);
    }
  }, [currentItem]);

  return (
    <>
      <Row style={show} gutter={(24, 24)}>
        <Col span={10}>
          <p style={{ marginBottom: "10px" }}>{labels}</p>
        </Col>

        <Col span={14}>
          <Button
            onClick={removeItem}
            type="text"
            icon={<DeleteOutlined />}
            size="small"
            style={{ float: "right", marginLeft: "0px", marginTop: "10px" }}
          >
            {translate("remove")}
          </Button>
          <Button
            onClick={editItem}
            type="text"
            icon={<EditOutlined />}
            size="small"
            style={{ float: "right", marginRight: "5px", marginTop: "10px" }}
          >
            {translate("edit")}
          </Button>
        </Col>

        <Col span={24}>
          <div className="line"></div>
        </Col>

        <div className="space10"></div>
      </Row>

      <ReadItem config={config} />

      <UpdateForm config={config} formElements={formElements} />
    </>
  );
}

export default function CrudModule({ config, createForm, updateForm }) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(crud.resetState());
  }, []);

  return (
    <CrudLayout
      config={config}
      headerPanel={<HeaderPanel config={config} />}
      sidePanelTopContent={<SidePanelTopContent config={config} formElements={updateForm} />}
      sidePanelBottomContent={<CreateForm config={config} formElements={createForm} />}
    >
      <DataTable config={config} />
      <DeleteModal config={config} />
    </CrudLayout>
  );
}
