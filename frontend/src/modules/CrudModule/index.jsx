import CreateForm from "@/components/CreateForm";
import DataTable from "@/components/DataTable";
import ReadItem from "@/components/ReadItem";
import SearchItem from "@/components/SearchItem";
import UpdateForm from "@/components/UpdateForm";
import { useCrudContext } from "@/context/crudContext";
import CrudLayout from "@/layout/CrudLayout";
import { crud } from "@/redux/crudRedux/action";
import { selectCurrentItem } from "@/redux/crudRedux/selector";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HeaderPanel = ({ config }) => {
  const { crudContextAction } = useCrudContext();
  const { collapsedBox } = crudContextAction;

  const addNewItem = () => {
    collapsedBox.close();
  };

  return (
    <Row gutter={8}>
      <Col className="gutter-row" span={21}>
        {/* <SearchItem /> */}
      </Col>
      <Col className="gutter-row" span={3}>
        <Button block icon={<PlusOutlined />} onClick={addNewItem}></Button>
      </Col>
    </Row>
  );
};

function SidePanelTopContent({ config, formElements }) {
  const dispatch = useDispatch();
  const { crudContextAction, state } = useCrudContext();
  const { editBox } = crudContextAction;
  const { isReadBoxOpen, isEditBoxOpen } = state;
  const { result: currentItem } = useSelector(selectCurrentItem);

  const editItem = () => {
    dispatch(crud.currentAction({ actionType: "update", data: currentItem }));
    editBox.open();
  };

  const show = isReadBoxOpen || isEditBoxOpen ? { opacity: 1 } : { opacity: 0 };

  return (
    <>
      <Row style={show} gutter={(24, 24)}>
        <Col span={10}>
          <p style={{ marginBottom: "10px" }}>{currentItem['name']}</p>
        </Col>

        <Col span={14}>
          <Button
            onClick={editItem}
            type="text"
            icon={<EditOutlined />}
            size="small"
            style={{ float: "right", marginLeft: "0px", marginTop: "10px" }}
          >
            Edit
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
      headerPanel={<HeaderPanel />}
      sidePanelTopContent={<SidePanelTopContent config={config} formElements={updateForm} />}
      sidePanelBottomContent={<CreateForm config={config} formElements={createForm} />}
    >
      <DataTable config={config} />
    </CrudLayout>
  );
}
