import { useCrudContext } from "@/context/crudContext";
import { PageHeader } from "@ant-design/pro-layout";
import { Button, Table } from "antd";
import { generate as uniqueId } from 'shortid';

function AddNewItem({}) {
  const { crudContextAction } = useCrudContext();
  const { collapsedBox, panel } = crudContextAction;

  const handleClick = () => {
    panel.open();
    collapsedBox.close();
  };

  return (
    <Button onClick={handleClick} type="primary">
      Button
    </Button>
  );
}

export default function DataTable({}) {
  return (
    <>
      <PageHeader
        style={{
          padding: "20px 0px",
        }}
        onBack={() => window.history.back()}
        ghost={false}
        extra={[<AddNewItem key={uniqueId()}/>]}
      ></PageHeader>

      <Table />
    </>
  );
}
