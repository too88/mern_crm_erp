import useLanguage from "@/locale/useLanguage";
import { fields } from "./config";
import DynamicForm from "@/form/DynamicForm";
import CrudModule from "@/modules/CrudModule";

const EXPENSE_CATEGORY = 'expensecategory';

export default function ExpenseCategory() {
  const translate = useLanguage();
  const entity = EXPENSE_CATEGORY;

  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
  };

  const deleteModalLabels = ['name'];

  const labels = {
    PANEL_TITLE: translate('expense_category'),
    TABLE_NAME: translate('expense_category_list'),
    ADD_NEW_ENTITY: translate('add_new_expense_category'),
    ENTITY_NAME: translate('expense_category'),
  };

  const configPage = {
    entity,
    ...labels,
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
