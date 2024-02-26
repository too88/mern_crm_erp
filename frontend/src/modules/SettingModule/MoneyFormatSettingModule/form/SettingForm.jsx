import useLanguage from "@/locale/useLanguage";
import { Form, Input, InputNumber, Select, Switch } from "antd";

export default function SettingForm() {
  const translate = useLanguage();

  return (
    <>
      <Form.Item
        label={translate("currency_name")}
        name="currency"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>

      <Form.Item
        label={translate("currency_symbol")}
        name="currency_symbol"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>

      <Form.Item
        label={translate("currency_position")}
        name="currency_position"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="before">{translate("before")}</Select.Option>
          <Select.Option value="after">{translate("after")}</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label={translate("decimal_separator")}
        name="decimal_sep"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>

      <Form.Item
        label={translate("cent_precision")}
        name="cent_precision"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item
        label={translate("zero_format")}
        name="zero_format"
        rules={[
          {
            required: true,
          },
        ]}
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
    </>
  );
}
