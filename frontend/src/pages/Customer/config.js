export const fields = {
  type: {
    type: "selectWithFeedback",
    renderAsTag: true,
    options: [
      {
        value: "people",
        label: "people",
        color: "magenta",
      },
      {
        value: "company",
        label: "company",
        color: "blue",
      },
    ],
    require: true,
    hasFeedback: true,
  },
  name: {
    type: "string",
    disableForForm: true,
  },
  country: {
    type: "country",
    disableForForm: true,
  },
  phone: {
    type: "phone",
    disableForForm: true,
  },
  email: {
    type: "email",
    disableForForm: true,
  },
  people: {
    type: "search",
    label: "people",
    entity: "people",
    displayLabels: ["firstname", "lastname"],
    searchFields: "firstname, lastname",
    dataIndex: ["people", "firstname"],
    disableForTable: true,
    feedback: "people",
  },
  company: {
    type: "search",
    label: "company",
    entity: "company",
    displayLabels: ["name"],
    searchFields: "name",
    dataIndex: ["company", "name"],
    disableForTable: true,
    feedback: "company",
  },

};
