import AutoCompleteAsync from "@/components/AutoCompleteAsync";
import { DatePicker, Form, Input, InputNumber, Select, Switch } from "antd";

export default function DynamicForm({ fields }) {
  return (
    <>
      {Object.keys(fields).map((key) => {
        let field = fields[key];

        return <FormElement key={key} field={field} />;
      })}
    </>
  );
}

// TODO: handle field prop for each element
function FormElement({ field }) {
  const componentAggregation = {
    string: <Input />,
    url: <Input />,
    email: <Input />,
    phone: <Input />,
    number: <InputNumber />,
    currency: <InputNumber />,
    textarea: <Input.TextArea />,
    boolean: <Switch />,
    date: <DatePicker />,
    select: (
      <Select>
        <Select.Option></Select.Option>
      </Select>
    ),
    color: (
      <Select>
        <Select.Option></Select.Option>
      </Select>
    ),
    tag: (
      <Select>
        <Select.Option></Select.Option>
      </Select>
    ),
    array: (
      <Select>
        <Select.Option></Select.Option>
      </Select>
    ),
    country: (
      <Select>
        <Select.Option></Select.Option>
      </Select>
    ),
    search: <AutoCompleteAsync />,
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
  const renderComponent = componentAggregation[""] ?? componentAggregation["string"];

  return <Form.Item>{renderComponent}</Form.Item>;
}
