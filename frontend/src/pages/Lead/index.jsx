import useLanguage from "@/locale/useLanguage";
import { fields } from "./config";
import DynamicForm from "@/form/DynamicForm";
import CrudModule from "@/modules/CrudModule";

const LEAD = 'lead';

export default function Lead() {
  const translate = useLanguage();
  const entity = LEAD;
  
  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
  };
  const deleteModalLabels = ["name"];

  const Labels = {
    PANEL_TITLE: translate("lead"),
    TABLE_NAME: translate("lead_list"),
    ADD_NEW_ENTITY: translate("add_new_lead"),
    ENTITY_NAME: translate("lead"),
  };
  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    fields,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} />}
      config={config}
    />
  );
}
