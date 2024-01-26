import CrudModule from "@/modules/CrudModule";
import { fields } from "./config";
import DynamicForm from "@/form/DynamicForm";
import useLanguage from "@/locale/useLanguage";

const COMPANY = "company";

export default function Company() {
  const translate = useLanguage()

  const entity = COMPANY;

  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
  };

  const deleteModalLabels = ["name"];

  const labels = {
    PANEL_TITLE: translate("company"),
    TABLE_NAME: translate("company_list"),
    ADD_NEW_ENTITY: translate("add_new_company"),
    ENTITY_NAME: translate("company"),
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
