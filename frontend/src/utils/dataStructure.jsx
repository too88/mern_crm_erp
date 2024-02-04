import { Switch, Tag } from "antd";
import color from "./color";
import { countryList } from "./countryList";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { crud } from "@/redux/crudRedux/action";

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

export default function dataForTable({ fields, translate, moneyFormatter, updateAction }) {
  const dispatch = useDispatch();

  let columns = [];

  Object.keys(fields).forEach((key) => {
    let field = fields[key];
    const keyIndex = field.dataIndex ?? [key];

    const components = {
      boolean: {
        title: field.label ? translate(field.label) : translate(key),
        dataIndex: keyIndex,
        onCell: () => ({
          props: {
            style: {
              width: "60px",
            },
          },
        }),
        render: (_, record) => {
          return (
            <Switch
              onChange={() => updateAction(record, key)}
              checked={record[key]}
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          );
        },
      },
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
      currency: {
        title: field.label ? translate(field.label) : translate(key),
        dataIndex: keyIndex,
        onCell: () => {
          return {
            style: {
              textAlign: "right",
              whiteSpace: "nowrap",
            },
          };
        },
        render: (_, record) => moneyFormatter({ amount: record[key] }),
      },
      async: {
        title: field.label ? translate(field.label) : translate(key),
        dataIndex: keyIndex,
        render: (text, record) => {
          return (
            <Tag bordered={false} color={field.color || record[key]?.color || record.color}>
              {text}
            </Tag>
          );
        },
      },
      country: {
        title: field.label ? translate(field.label) : translate(key),
        dataIndex: keyIndex,
        render: (_, record) => {
          const selectedCountry = countryList.find((item) => item.value === record[key]);

          return (
            <Tag bordered={false} color={field.color || undefined}>
              {selectedCountry?.icon && selectedCountry?.icon + " "}
              {selectedCountry?.label && translate(selectedCountry.label)}
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
