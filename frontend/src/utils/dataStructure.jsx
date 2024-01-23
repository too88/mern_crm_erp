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

export default function dataForTable({ fields }) {
  let columns = [];

  Object.keys(fields).forEach((key) => {
    let field = fields[key];
    const keyIndex = field.dataIndex ?? [key];

    const components = {};

    const defaultComponent = {
      title: field.label ? field.label : key,
      dataIndex: keyIndex,
    };

    const type = field.type;

    if (!type.disableForTable) {
      columns.push(defaultComponent);
    }
  });

  return columns;
}
