import useLanguage from "@/locale/useLanguage";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Form, Input, Select, Switch } from "antd";

export default function AdminForm({ isUpdateForm = false }) {
  const translate = useLanguage();
  return (
    <>
      <Form.Item
        label={translate("firstname")}
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label={translate("lastname")}
        name="surname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label={translate("email")}
        name="email"
        rules={[
          {
            required: true,
          },
          {
            type: "email",
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>

      {!isUpdateForm && (
        <Form.Item
          label={translate("Password")}
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input autoComplete="new-password" />
        </Form.Item>
      )}

      <Form.Item label={translate("enabled")} name="enabled" valuePropName={"checked"}>
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
      </Form.Item>
      <Form.Item
        label={translate("role")}
        name="role"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="admin">{translate("admin_super_admin")}</Select.Option>
          <Select.Option value="staffAdmin">{translate("staff_admin_crud")}</Select.Option>
          <Select.Option value="staff">{translate("staff_crud")}</Select.Option>
          <Select.Option value="createOnly">{translate("create_and_read_only")}</Select.Option>
          <Select.Option value="readOnly">{translate("read_only")}</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
}
