import DataTable from "@/components/DataTable";
import useLanguage from "@/locale/useLanguage";
import { EyeOutlined } from "@ant-design/icons";

export default function AdminCrudModule({ config }) {
  const translate = useLanguage();

  return (
    <DataTable
      config={config}
      extra={[
        {
          label: translate("update_password"),
          key: "updatePassword",
          icon: <EyeOutlined />,
        },
      ]}
    />
  );
}
