import { Tag } from "antd";
import color from "./color";

export const dataForRead = ({ fields }) => {
  let columns = [];

  Object.keys(fields).forEach((key) => {
    let field = fields[key];

    columns.push({
      title: field.label ?? key,
      dataIndex: field.dataIndex ? field.dataIndex.join(".") : key,
    });
  });

  return columns;
};

export default function dataForTable({ fields, translate }) {
  let columns = [];

  Object.keys(fields).forEach((key) => {
    let field = fields[key];
    const keyIndex = field.dataIndex ?? [key];

    const components = {
      color: {
        title: field.label ?? key,
        dataIndex: keyIndex,
        render: (text) => {
          return (
            <Tag bordered={false} color={text}>
              {color.find((x) => x.value === text)?.label}
            </Tag>
          );
        },
      },
    };

    const defaultComponent = {
      title: field.label ? translate(field.label) : translate(key),
      dataIndex: keyIndex,
    };

    const type = field.type;

    Object.keys(components).includes(type)
      ? columns.push(components[type])
      : columns.push(defaultComponent);
  });

  return columns;
}
