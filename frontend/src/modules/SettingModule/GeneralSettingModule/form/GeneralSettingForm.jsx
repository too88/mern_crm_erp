import languages from "@/locale/languages";
import useLanguage from "@/locale/useLanguage";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Form, Input, Select, Switch } from "antd";

export default function GeneralSettingForm() {
  const translate = useLanguage();

  return (
    <>
      <Form.Item label={translate("application_name")} name="mern_app_name">
        <Input autoComplete="off" />
      </Form.Item>

      <Form.Item label={translate("language")} name="mern_app_language">
        <Select
          showSearch
          placeholder={translate("select_language")}
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? "").includes(input.toLowerCase())}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "").toLowerCase().startsWith((optionB?.label ?? "").toLowerCase())
          }
        >
          {languages.map((language) => (
            <Select.Option
              key={language.value}
              value={language.value}
              label={language.label.toLowerCase()}
            >
              <span>{language.icon}</span>
              {language.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label={translate("allow_registration")}
        name="mern_registration_allowed"
        valuePropName="checked"
      >
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
      </Form.Item>

      <Form.Item label={translate("date_format")} name="mern_app_date_format">
        <Select
          showSearch
          style={{
            width: "100%",
          }}
          options={[
            {
              value: "DD/MM/YYYY",
              label: "DD/MM/YYYY",
            },
            {
              value: "MM/DD/YYYY",
              label: "MM/DD/YYYY",
            },
            {
              value: "DD-MM-YYYY",
              label: "DD-MM-YYYY",
            },
            {
              value: "MM-DD-YYYY",
              label: "MM-DD-YYYY",
            },
          ]}
        ></Select>
      </Form.Item>

      <Form.Item label={translate("application_email")} name="mern_app_email">
        <Input autoComplete="off" />
      </Form.Item>

      <Form.Item label={translate("application_url")} name="mern_base_url">
        <Input autoComplete="off" />
      </Form.Item>
    </>
  );
}
