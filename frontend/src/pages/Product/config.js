export const fields = {
  name: {
    type: "string",
    require: true,
  },
  productCategory: {
    type: "async",
    label: "Product Category",
    displayLabels: ["productCategory", "name"],
    dataIndex: ["productCategory", "name"],
    entity: "productcategory",
    require: true,
  },
  price: {
    type: "currency",
    require: true,
  },
  description: {
    type: "textarea",
  },
  ref: {
    type: "string",
  },
};
