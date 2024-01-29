import DynamicForm from "@/form/DynamicForm";
import useLanguage from "@/locale/useLanguage";
import CrudModule from "@/modules/CrudModule";
import { fields } from "./config";

const PRODUCT = "product";

export default function Product() {
  const translate = useLanguage();
  const entity = PRODUCT;

  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
  };
  const deleteModalLabels = ["name"];

  const labels = {
    PANEL_TITLE: translate("product"),
    DATATABLE_TITLE: translate("product_list"),
    ADD_NEW_ENTITY: translate("add_new_product"),
    ENTITY_NAME: translate("product"),
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
