import Loading from "@/components/Loading";
import { useCrudContext } from "@/context/crudContext";
import useOnFetch from "@/hooks/useOnFetch";
import useLanguage from "@/locale/useLanguage";
import { crud } from "@/redux/crudRedux/action";
import { selectUpdatedItem } from "@/redux/crudRedux/selector";
import request from "@/services/request";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UpdatePassword() {
  const dispatch = useDispatch();
  const translate = useLanguage();

  const { current } = useSelector(selectUpdatedItem);
  const { state, crudContextAction } = useCrudContext();
  const { readBox } = crudContextAction;
  const { isAdvancedBoxOpen } = state;
  const [form] = Form.useForm();
  const { onFetch, isLoading, isSuccess } = useOnFetch();

  const handleSubmit = (fieldsValue) => {
    const entity = "admin/password-update/" + current._id;
    const updateFn = async () => {
      return await request.patch({ entity, jsonData: fieldsValue });
    };
    const callback = updateFn();
    onFetch(callback);
  };

  const showCurrentRecord = () => {
    readBox.open();
  };

  const show = isAdvancedBoxOpen
    ? { display: "block", opacity: 1 }
    : { display: "none", opacity: 0 };

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      dispatch(crud.resetAction({ actionType: "update" }));
    }
  }, [isSuccess]);

  return (
    <div style={show}>
      <Loading isLoading={isLoading}>
        <h3>{translate("update_password")}</h3>
        <div className="space10"></div>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label={translate("new_password")}
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>

          <Form.Item
            style={{
              display: "inline-block",
              paddingRight: "5px",
            }}
          >
            <Button type="primary" htmlType="submit">
              {translate("save")}
            </Button>
          </Form.Item>

          <Form.Item
            style={{
              display: "inline-block",
              paddingRight: "5px",
            }}
          >
            <Button onClick={showCurrentRecord}>{translate("cancel")}</Button>
          </Form.Item>
        </Form>
      </Loading>
    </div>
  );
}
