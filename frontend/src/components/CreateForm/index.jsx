import { useCrudContext } from "@/context/crudContext";
import { crud } from "@/redux/crudRedux/action";
import { Button, Form } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import { selectCreatedItem } from "@/redux/crudRedux/selector";

export default function CreateForm({ config, formElements }) {
  const dispatch = useDispatch();
  let { entity } = config;
  const { isLoading, isSuccess } = useSelector(selectCreatedItem);
  const { crudContextAction } = useCrudContext();
  const { panel, collapsedBox } = crudContextAction;
  const [form] = Form.useForm();

  const onSubmit = (fieldsValue) => {
    const trimmedValues = Object.keys(fieldsValue).reduce((acc, key) => {
      acc[key] = typeof fieldsValue[key] === "string" ? fieldsValue[key].trim() : fieldsValue[key];
      return acc;
    }, {});

    dispatch(crud.create({ entity, jsonData: trimmedValues }));
  };

  const collapsePanelBox = () => {
    collapsedBox.collapse();
  };

  useEffect(() => {
    if (isSuccess) {
      // TODO: what is readBox.open()
      collapsedBox.open();
      panel.open();
      form.resetFields();
      // dispatch(crud.resetAction({ actionType: "create" }));
      dispatch(crud.list({ entity }));
    }
  }, [isSuccess]);

  return (
    <Loading isLoading={isLoading}>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        {formElements}

        <div className="d-flex">
          <Form.Item className="pr-1" >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

          <Form.Item>
            <Button onClick={collapsePanelBox}>Cancel</Button>
          </Form.Item>
        </div>
      </Form>
    </Loading>
  );
}
