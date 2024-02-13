import useLanguage from "@/locale/useLanguage";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Form, Input, InputNumber, Switch } from "antd";

const formItems = [
  {
    label: "multi_branch",
    settingKey: "company_has_multi_branch",
    valueType: "boolean",
  },
  {
    settingKey: "company_name",
    valueType: "string",
  },
  {
    settingKey: "company_address",
    valueType: "string",
  },
  {
    settingKey: "company_state",
    valueType: "string",
  },
  {
    settingKey: "company_country",
    valueType: "string",
  },
  {
    settingKey: "company_email",
    valueType: "string",
  },
  {
    settingKey: "company_phone",
    valueType: "string",
  },
  {
    settingKey: "company_cell",
    valueType: "string",
  },
  {
    settingKey: "company_website",
    valueType: "string",
  },
  {
    settingKey: "company_tax_number",
    valueType: "string",
  },
  {
    settingKey: "company_vat_number",
    valueType: "string",
  },
  {
    settingKey: "company_reg_number",
    settingValue: ["company_reg_number"],
    valueType: "number",
  },
];

export default function SettingForm() {
  const translate = useLanguage();

  return (
    <>
      {formItems.map((item) => {
        return (
          <Form.Item
            key={item.settingKey}
            label={item.label ? translate(item.label) : translate(item.settingKey)}
            name={item.settingKey}
            rules={[
              {
                required: true,
              },
            ]}
            valuePropName={item.valueType === "boolean" ? "checked" : "value"}
          >
            {item.valueType === "string" && <Input autoComplete="off" />}
            {item.valueType === "number" && <InputNumber min={0} style={{ width: "100%" }} />}
            {item.valueType === "boolean" && (
              <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
            )}
          </Form.Item>
        );
      })}
    </>
  );
}
