import CreateForm from "@/components/CreateForm";
import DeleteModal from "@/components/DeleteModal";
import CrudLayout from "@/layout/CrudLayout";
import AdminDataTable from "./AdminDataTable";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { crud } from "@/redux/crudRedux/action";
import useLanguage from "@/locale/useLanguage";
import { useCrudContext } from "@/context/crudContext";
import { selectCurrentItem } from "@/redux/crudRedux/selector";
import { Button, Col, Row, Space } from "antd";
import { DeleteOutlined, EditOutlined, LockOutlined, PlusOutlined } from "@ant-design/icons";
import ReadItem from "@/components/ReadItem";
import UpdateForm from "@/components/UpdateForm";
import UpdatePassword from "./UpdatePassword";
import SearchItem from "@/components/SearchItem";

function SidePanelTopContent({ config, formElements }) {
  const translate = useLanguage();
  const { crudContextAction } = useCrudContext();
  const { advancedBox, modal, editBox } = crudContextAction;
  const { result: currentItem } = useSelector(selectCurrentItem);
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(crud.currentAction({ actionType: "delete", data: currentItem }));
    modal.open();
  };

  const editItem = () => {
    dispatch(crud.currentAction({ actionType: "update", data: currentItem }));
    editBox.open();
  };

  const updatePassword = () => {
    dispatch(crud.currentAction({ actionType: "update", data: currentItem }));
    advancedBox.open();
  };

  return (
    <>
      <div className="space20"></div>
      <Space>
        <Button onClick={removeItem} type="text" icon={<DeleteOutlined />} size="small">
          {translate("remove")}
        </Button>
        <Button onClick={editItem} type="text" icon={<EditOutlined />} size="small">
          {translate("edit")}
        </Button>
        <Button onClick={updatePassword} type="text" icon={<LockOutlined />} size="small">
          {translate("update_password")}
        </Button>
      </Space>
      <div className="space20"></div>
      <ReadItem config={config} />
      <UpdateForm config={config} formElements={formElements} withUpload={true} />
      <UpdatePassword config={config} />
    </>
  );
}

function FixHeaderPanel({ config }) {
  const { crudContextAction } = useCrudContext();
  const { collapsedBox } = crudContextAction;

  const addNewItem = () => {
    collapsedBox.open();
  };

  return (
    <>
      <Row gutter={12}>
        <Col className="gutter-row" span={24}>
          <h1 style={{ fontSize: 20, marginBottom: 20 }}>{config.PANEL_TITLE}</h1>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col className="gutter-row" span={21}>
          <SearchItem config={config} />
        </Col>
        <Col className="gutter-row" span={3}>
          <Button onClick={addNewItem} block={true} icon={<PlusOutlined />}></Button>
        </Col>
      </Row>
    </>
  );
}

function AdminCrudModule({ config, createForm, updateForm }) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(crud.resetState());
  }, []);

  return (
    <CrudLayout
      config={config}
      FixHeaderPanel={<FixHeaderPanel config={config} />}
      sidePanelBottomContent={
        <CreateForm config={config} formElements={createForm} withUpload={true} />
      }
      sidePanelTopContent={<SidePanelTopContent config={config} formElements={updateForm} />}
    >
      <AdminDataTable config={config} />
      <DeleteModal config={config} />
    </CrudLayout>
  );
}

export default AdminCrudModule;
