import useLanguage from "@/locale/useLanguage";

const CLIENT = "client";

export default function Customer() {
  const translate = useLanguage();
  const entity = CLIENT;

  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
  };

  const deleteModalLabels = ["name"];

  const labels = {
    PANEL_TITLE: translate("client"),
    TABLE_NAME: translate("client_list"),
    ADD_NEW_ENTITY: translate("add_new_client"),
    ENTITY_NAME: translate("client"),
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
