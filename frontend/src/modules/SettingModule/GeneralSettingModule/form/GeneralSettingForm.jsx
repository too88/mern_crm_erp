import languages from "@/locale/languages";
import useLanguage from "@/locale/useLanguage";
import { Form, Input, Select } from "antd";

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
    </>
  );
}
