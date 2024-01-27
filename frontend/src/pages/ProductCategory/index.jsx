import useLanguage from "@/locale/useLanguage";
import { fields } from "./config";
import CrudModule from "@/modules/CrudModule";
import DynamicForm from "@/form/DynamicForm";

const PRODUCTCATEGORY = "productcategory";

export default function ProductCategory() {
  const translate = useLanguage();
  const entity = PRODUCTCATEGORY;
  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
  };
  const deleteModalLabels = ["name"];

  const Labels = {
    PANEL_TITLE: translate("product_category"),
    DATATABLE_TITLE: translate("product_category_list"),
    ADD_NEW_ENTITY: translate("add_new_product_category"),
    ENTITY_NAME: translate("product_category"),
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
