export const fields = {
  name: {
    type: "string",
    require: true,
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
  mainContact: {
    type: "search",
    renderAsTag: true,
    label: "Contact",
    entity: "people",
    displayLabels: ["firstname", "lastname"],
    searchFields: "firstname, lastname",
    dataIndex: ["mainContact", "firstname"],
  },
};
