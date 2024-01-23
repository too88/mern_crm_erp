import { useCrudContext } from "@/context/crudContext";
import { crud } from "@/redux/crudRedux/action";
import { selectListItems } from "@/redux/crudRedux/selector";
import dataForTable from "@/utils/dataStructure";
import { PageHeader } from "@ant-design/pro-layout";
import { Button, Dropdown, Table } from "antd";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generate as uniqueId } from "shortid";
import * as constants from "@/constants/common";
import { EllipsisOutlined, EyeOutlined } from "@ant-design/icons";

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

export default function DataTable({ config }) {
  let { entity, TABLE_NAME, fields, dataTableColumns } = config;
  const dispatch = useDispatch();
  const { crudContextAction } = useCrudContext();
  const { panel, collapsedBox, readBox } = crudContextAction;
  const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);

  const { pagination, items: dataSource } = listResult;

  const items = [
    {
      label: "Show",
      key: "read",
      icon: <EyeOutlined />,
    },
  ];

  const handleRead = (record) => {
    dispatch(crud.currentItem({ data: record }));
    panel.open();
    collapsedBox.open();
    readBox.open();
  };

  const handleDataTableLoad = useCallback((pagination) => {
    const options = {
      page: pagination.current || constants.PAGINATE_PAGE_DEFAULT,
      items: pagination.pageSize || constants.PAGINATE_PAGESIZE,
    };
    dispatch(crud.list({ entity, options }));
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    dispatch(crud.list({ entity }));

    return () => {
      controller.abort();
    };
  }, []);

  let dispatchColumns = [];
  if (fields) {
    dispatchColumns = [...dataForTable({ fields })];
  } else {
    dispatchColumns = [...dataTableColumns];
  }

  dataTableColumns = [
    ...dispatchColumns,
    {
      title: "",
      key: "action",
      fixed: "right",
      render: (_, record) => (
        <Dropdown
          menu={{
            items,
            onClick: ({ key }) => {
              switch (key) {
                case "read":
                  handleRead(record);
                  break;
                default:
                  break;
              }
            },
          }}
          trigger={['click']}
        >
          <EllipsisOutlined
            style={{ cursor: "pointer", fontSize: "24px" }}
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        style={{
          padding: "20px 0px",
        }}
        onBack={() => window.history.back()}
        title={TABLE_NAME}
        ghost={false}
        extra={[<AddNewItem key={uniqueId()} />]}
      ></PageHeader>

      <Table
        columns={dataTableColumns}
        rowKey={(item) => item._id}
        dataSource={dataSource}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handleDataTableLoad}
        scroll={{ x: true }}
      />
    </>
  );
}
