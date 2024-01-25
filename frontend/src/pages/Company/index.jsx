import CrudModule from "@/modules/CrudModule";
import { fields } from "./config";
import DynamicForm from "@/form/DynamicForm";

const COMPANY = "company";

export default function Company() {
  const entity = COMPANY;

  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
  };

  const deleteModalLabels = ["name"];

  const labels = {
    PANEL_TITLE: "Company",
    TABLE_NAME: "Company List",
    ADD_NEW_ENTITY: "Add New Entity",
    ENTITY_NAME: "Company",
  };

  const configPage = {
    ...labels,
    entity,
  };

  const config = {
    ...configPage,
    fields,
    deleteModalLabels,
    searchConfig
  };

  return (
    <CrudModule
      updateForm={<DynamicForm fields={fields} />}
      createForm={<DynamicForm fields={fields} />}
      config={config}
    />
  );
}
