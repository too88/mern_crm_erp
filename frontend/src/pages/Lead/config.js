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
    required: true,
    hasFeedback: true,
  },
  name: {
    type: "string",
    disableForForm: true,
  },
  status: {
    type: "selectWithTranslation",
    renderAsTag: true,
    options: [
      {
        value: "draft",
        label: "draft",
        color: "gray",
      },
      {
        value: "new",
        label: "new",
        color: "blue",
      },
      {
        value: "prospect",
        label: "prospect",
        color: "green",
      },
      {
        value: "open",
        label: "open",
        color: "red",
      },
      {
        value: "working",
        label: "working",
        color: "orange",
      },
    ],
  },
  source: {
    type: "selectWithTranslation",
    renderAsTag: true,
    options: [
      {
        value: "linkedIn",
        label: "linkedIn",
        color: "blue",
      },
      {
        value: "twitter",
        label: "twitter",
        color: "cyan",
      },
      {
        value: "website",
        label: "website",
        color: "gold",
      },
      {
        value: "ads",
        label: "ads",
        color: "purple",
      },
      {
        value: "sales",
        label: "sales",
        color: "magenta",
      },
    ],
  },
  country: {
    type: "country",
    color: null,
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
