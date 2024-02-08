import useLanguage from "@/locale/useLanguage";
import { fields } from "./config";
import DynamicForm from "@/form/DynamicForm";
import CrudModule from "@/modules/CrudModule";

const EXPENSE = "expense";

export default function Expense() {
  const entity = EXPENSE;
  const translate = useLanguage();
  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
  };
  const deleteModalLabels = ["name"];

  const Labels = {
    PANEL_TITLE: translate("expense"),
    TABLE_NAME: translate("expense_list"),
    ADD_NEW_ENTITY: translate("add_new_expense"),
    ENTITY_NAME: translate("expense"),
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
