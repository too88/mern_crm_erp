import Loading from "@/components/Loading";
import useLanguage from "@/locale/useLanguage";
import { settingAction } from "@/redux/setting/action";
import { selectSetting } from "@/redux/setting/selector";
import { Button, Form } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateSettingForm({ config, children }) {
  const { entity, settingCategory } = config;
  const dispatch = useDispatch();
  const { result, isLoading } = useSelector(selectSetting);
  const translate = useLanguage();
  const [form] = Form.useForm();

  const onSubmit = (fieldsValue) => {
    const settings = [];

    for (const [key, value] of Object.entries(fieldsValue)) {
      settings.push({ settingKey: key, settingValue: value });
    }

    dispatch(settingAction.updateMany({ entity, jsonData: { settings } }));
  };

  useEffect(() => {
    const current = result[settingCategory];
    form.setFieldsValue(current);
  }, [result]);

  return (
    <div>
      <Loading isLoading={isLoading}>
        <Form
          form={form}
          onFinish={onSubmit}
          labelCol={{ span: 8 }}
          labelAlign="left"
          wrapperCol={{ span: 16 }}
        >
          {children}
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
              paddingLeft: "5px",
            }}
          >
            <Button onClick={() => console.log("cancel clicked")}>{translate("cancel")}</Button>
          </Form.Item>
        </Form>
      </Loading>
    </div>
  );
}
