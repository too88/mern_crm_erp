import { Button, Col, Form, Row } from "antd";
import ReadItem from "../ReadItem";
import Loading from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { selectUpdatedItem } from "@/redux/crudRedux/selector";
import { useCrudContext } from "@/context/crudContext";
import { crud } from "@/redux/crudRedux/action";
import { useEffect } from "react";
import dayjs from "dayjs";
import useLanguage from "@/locale/useLanguage";

export default function UpdateForm({ config, formElements }) {
  let { entity } = config;
  const [form] = Form.useForm();
  const translate = useLanguage();
  const dispatch = useDispatch();
  const { current: currentResult, isLoading, isSuccess } = useSelector(selectUpdatedItem);
  const { state, crudContextAction } = useCrudContext();
  const { isEditBoxOpen } = state;
  const { panel, collapsedBox, readBox } = crudContextAction;

  const showCurrentRecord = () => {
    readBox.open();
  };

  const onSubmit = (fieldsValue) => {
    const id = currentResult._id;

    const trimmedValues = Object.keys(fieldsValue).reduce((acc, key) => {
      acc[key] = typeof fieldsValue[key] === "string" ? fieldsValue[key].trim() : fieldsValue[key];
      return acc;
    }, {});

    dispatch(crud.update({ entity, id, jsonData: trimmedValues }));
  };

  useEffect(() => {
    if (currentResult) {
      let newValues = { ...currentResult };

      if (newValues.created) {
        newValues = {
          ...newValues,
          created: dayjs(newValues["created"]).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
        };
      }

      if (newValues.updated) {
        newValues = {
          ...newValues,
          updated: dayjs(newValues["updated"]).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
        };
      }

      form.resetFields();
      form.setFieldsValue(newValues);
    }
  }, [currentResult]);

  useEffect(() => {
    if (isSuccess) {
      readBox.open();
      collapsedBox.open();
      panel.open();
      form.resetFields();
      dispatch(crud.resetAction({ actionType: "update" }));
      dispatch(crud.list({ entity }));
    }
  }, [isSuccess]);

  const show = isEditBoxOpen ? { display: "block", opacity: 1 } : { display: "none", opacity: 0 };

  return (
    <div style={show}>
      <Loading isLoading={isLoading}>
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          {formElements}

          <Form.Item
            style={{
              display: "inline-block",
              paddingRight: "5px",
            }}
          >
            <Button type="primary" htmlType="submit">
            {translate('save')}
            </Button>
          </Form.Item>

          <Form.Item
            style={{
              display: "inline-block",
              paddingLeft: "5px",
            }}
          >
            <Button onClick={showCurrentRecord}>{translate('cancel')}</Button>
          </Form.Item>
        </Form>
      </Loading>
    </div>
  );
}
