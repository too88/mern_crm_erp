import DataTable from "@/components/DataTable";
import SearchItem from "@/components/SearchItem";
import CrudLayout from "@/layout/CrudLayout";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";

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

export default function CrudModule({}) {
  return (
    <CrudLayout headerPanel={<HeaderPanel />}>
      <DataTable />
    </CrudLayout>
  );
}
