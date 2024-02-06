import AutoCompleteAsync from "@/components/AutoCompleteAsync";
import SelectAsync from "@/components/SelectAsync";
import useLanguage from "@/locale/useLanguage";
import useMoney from "@/settings/useMoney";
import { countryList } from "@/utils/countryList";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { DatePicker, Form, Input, InputNumber, Select, Switch, Tag } from "antd";
import { generate as uniqueId } from "shortid";

export default function DynamicForm({ fields }) {
  return (
    <>
      {Object.keys(fields).map((key) => {
        let field = fields[key];

        if (!field.disableForForm) {
          field.name = key;
          if (!field.label) field.label = key;

          return <FormElement key={key} field={field} />;
        }
      })}
    </>
  );
}

function FormElement({ field }) {
  const translate = useLanguage();
  const money = useMoney();

  const componentAggregation = {
    string: <Input autoComplete="off" />,
    url: <Input addonBefore="https://" autoComplete="off" placeholder="www.sample.com" />,
    textarea: <Input.TextArea rows={4} />,
    email: <Input autoComplete="off" placeholder="sample@gmail.com" />,
    phone: <Input style={{ width: "100%" }} placeholder="+84 909 123 123" />,
    number: <InputNumber style={{ width: "100%" }} />,
    boolean: <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />,
    async: (
      <SelectAsync
        entity={field.entity}
        displayLabels={field.displayLabels}
        outputValue={field.outputValue}
        loadDefault={field.loadDefault}
        withRedirect={field.withRedirect}
        urlRedirect={field.urlRedirect}
        redirectLabel={field.redirectLabel}
      ></SelectAsync>
    ),
    currency: (
      <InputNumber
        className="moneyInput"
        min={0}
        controls={false}
        addonAfter={money.currency_position === "after" ? money.currency_symbol : undefined}
        addonBefore={money.currency_position === "before" ? money.currency_symbol : undefined}
      />
    ),
    // date: <DatePicker />,
    select: (
      <Select defaultValue={field.defaultValue} style={{ width: "100%" }}>
        {field.options?.map((option) => {
          return (
            <Select.Option key={`${uniqueId()}`} value={option.value}>
              {option.label}
            </Select.Option>
          );
        })}
      </Select>
    ),
    color: (
      <Select defaultValue={field.defaultValue} style={{ width: "100%" }}>
        {field.options?.map((option) => {
          return (
            <Select.Option key={`${uniqueId()}`} value={option.value}>
              <Tag bordered={false} color={option.color}>
                {option.label}
              </Tag>
            </Select.Option>
          );
        })}
      </Select>
    ),
    // tag: (
    //   <Select>
    //     <Select.Option></Select.Option>
    //   </Select>
    // ),
    // array: (
    //   <Select>
    //     <Select.Option></Select.Option>
    //   </Select>
    // ),
    country: (
      <Select
        showSearch
        defaultValue={field.defaultValue}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "").toLowerCase().startsWith((optionB?.label ?? "").toLowerCase())
        }
        style={{
          width: "100%",
        }}
      >
        {countryList.map((language) => (
          <Select.Option
            key={language.value}
            value={language.value}
            label={translate(language.label)}
          >
            {language?.icon && language?.icon + " "}
            {translate(language.label)}
          </Select.Option>
        ))}
      </Select>
    ),
    search: (
      <AutoCompleteAsync
        entity={field.entity}
        displayLabels={field.displayLabels}
        searchFields={field.searchFields}
        outputValue={field.outputValue}
      ></AutoCompleteAsync>
    ),
  };

  const ruleTypes = {
    string: "string",
    textarea: "string",
    phone: "string",
    number: "number",
    url: "url",
    website: "url",
    email: "email",
  };

  // TODO: should get field's type from upper prop
  const renderComponent = componentAggregation[field.type] ?? componentAggregation["string"];

  return (
    <Form.Item
      label={field.label}
      name={field.name}
      rules={[
        {
          required: field.required || false,
          type: ruleTypes[field.type] ?? "any",
        },
      ]}
      valuePropName={field.type === "boolean" ? "checked" : "value"}
    >
      {renderComponent}
    </Form.Item>
  );
}
