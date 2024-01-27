import DynamicForm from "@/form/DynamicForm";
import useLanguage from "@/locale/useLanguage";
import CrudModule from "@/modules/CrudModule";
import { fields } from "./config";

const PEOPLE = "people";

export default function People() {
  const translate = useLanguage();

  const entity = PEOPLE;

  const searchConfig = {
    displayLabels: ["firstname", "lastname"],
    searchFields: "firstname, lastname",
  };

  const deleteModalLabels = ["firstname", "lastname"];

  const labels = {
    PANEL_TITLE: translate("person"),
    TABLE_NAME: translate("people_list"),
    ADD_NEW_ENTITY: translate("add_new_person"),
    ENTITY_NAME: translate("person"),
  };

  const configPage = {
    ...labels,
    entity,
  };

  const config = {
    ...configPage,
    fields,
    deleteModalLabels,
    searchConfig,
  };

  return (
    <CrudModule
      updateForm={<DynamicForm fields={fields} />}
      createForm={<DynamicForm fields={fields} />}
      config={config}
    />
  );
}
