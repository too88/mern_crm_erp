import DataTable from "@/components/DataTable";
import SearchItem from "@/components/SearchItem";
import CrudLayout from "@/layout/CrudLayout";
import { crud } from "@/redux/crudRedux/action";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

const HeaderPanel = ({}) => {
  return (
    <Row gutter={8}>
      <Col className="gutter-row" span={21}>
        <SearchItem />
      </Col>
      <Col className="gutter-row" span={3}>
        <Button block icon={<PlusOutlined />} onclick={() => alert("addNewItem")}></Button>
      </Col>
    </Row>
  );
};

export default function CrudModule({ config }) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(crud.resetState());
  }, []);

  return (
    <CrudLayout headerPanel={<HeaderPanel />}>
      <DataTable config={config}/>
    </CrudLayout>
  );
}
