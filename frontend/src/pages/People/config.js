export const fields = {
  firstname: {
    type: "string",
    require: true,
  },
  lastname: {
    type: "string",
    require: true,
  },
  company: {
    type: "search",
    entity: "company",
    renderAsTag: true,
    displayLabels: ["name"],
    searchFields: "name",
    dataIndex: ["company", "name"],
  },
  country: {
    type: "country",
  },
  phone: {
    type: "phone",
  },
  email: {
    type: "email",
  },
};
