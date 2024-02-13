import AdminForm from "@/form/AdminForm";
import useLanguage from "@/locale/useLanguage";
import AdminCrudModule from "@/modules/AdminCrudModule";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";

const ADMIN = "admin";

export default function Admin() {
  const translate = useLanguage();
  const entity = ADMIN;

  const searchConfig = {
    displayLabels: ["name", "surname"],
    searchFields: "email,name,surname",
    outputValue: "_id",
  };

  const deleteModalLabels = ["email"];

  const readColumns = [
    { title: translate("first_name"), dataIndex: "name" },
    { title: translate("last_name"), dataIndex: "surname" },
    { title: translate("email"), dataIndex: "email" },
    { title: translate("role"), dataIndex: "role" },
  ];

  const dataTableColumns = [
    { title: translate("first_name"), dataIndex: "name" },
    { title: translate("last_name"), dataIndex: "surname" },
    { title: translate("email"), dataIndex: "email" },
    { title: translate("role"), dataIndex: "role" },
    {
      title: translate("enabled"),
      dataIndex: "enabled",
      onCell: () => ({
        props: {
          style: {
            width: "60px",
          },
        },
      }),
      render: (text) => (
        <Switch
          checked={text}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
        />
      ),
    },
  ];

  const labels = {
    PANEL_TITLE: translate("admin"),
    TABLE_NAME: translate("admin_list"),
    ADD_NEW_ENTITY: translate("add_new_admin"),
    ENTITY_NAME: translate("admin"),

    RECORD_ENTITY: translate("record_payment"),
  };

  const configPage = {
    entity,
    ...labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <AdminCrudModule
      createForm={<AdminForm />}
      updateForm={<AdminForm isUpdateForm={true} />}
      config={config}
    />
  );
}
