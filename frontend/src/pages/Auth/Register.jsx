import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Result } from "antd";

import { register } from "@/redux/auth/actions";
import { selectAuth } from "@/redux/auth/selectors";
import RegisterForm from "@/form/AuthForm/RegisterForm";
import useLanguage from "@/locale/useLanguage";
import Loading from "@/components/Loading";
import AuthModule from "@/modules/AuthModule";

const RegisterPage = () => {
  const translate = useLanguage();
  const { isLoading, isSuccess } = useSelector(selectAuth);

  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(register({ registerData: values }));
  };

  const FormContainer = () => {
    return (
      <Loading isLoading={isLoading}>
        <Form
          layout="vertical"
          name="signup"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <RegisterForm />
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" size="large">
              {translate("Register")}
            </Button>
            {translate("Or")} <a href="/login"> {translate("already_have_account_login")} </a>
          </Form.Item>
        </Form>
      </Loading>
    );
  };

  if (!isSuccess) {
    return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign up" />;
  } else {
    return (
      <Result
        status="info"
        title={translate("verify_your_account")}
        subTitle={translate("Check your email address to verify your account")}
      ></Result>
    );
  }
};

export default RegisterPage;
