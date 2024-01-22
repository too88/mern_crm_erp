import CrudModule from "@/modules/CrudModule";
import { fields } from "./config";
import DynamicForm from "@/form/DynamicForm";

const COMPANY = "company";

export default function Company() {
  const entity = COMPANY;

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
  };

  return <CrudModule createForm={<DynamicForm fields={fields} />} config={config} />;
}
