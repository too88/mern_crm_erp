import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useLanguage from "@/locale/useLanguage";
import { selectAuth } from "@/redux/auth/selectors";
import { Result, Button, Input, Space } from "antd";

import { verify as verifyAction } from "@/redux/auth/actions";
import Loading from "@/components/Loading";

const Verify = () => {
  const translate = useLanguage();
  const { userId, emailToken } = useParams();
  const { isLoading, isSuccess } = useSelector(selectAuth);

  const [verfied, setVerified] = useState(false);

  const dispatch = useDispatch();

  function asyncVerify() {
    dispatch(verifyAction({ userId, emailToken }));
  }

  useEffect(() => {
    if (isSuccess) setVerified(true);
  }, [isSuccess]);

  if (!verfied) {
    return (
      <Result
        status="info"
        title={translate("verify_your_account")}
        subTitle={translate(
          "complete_verification_by_providing_the_code_that_you_received_by_email"
        )}
        extra={
          <Loading isLoading={isLoading}>
            <Space>
              <Input value={emailToken} style={{ width: 150 }} />
              <Button
                type="primary"
                onClick={() => {
                  asyncVerify();
                }}
              >
                {translate("verify_now")}
              </Button>
            </Space>
          </Loading>
        }
      ></Result>
    );
  } else {
    return (
      <Result
        status="success"
        title={translate("Congratulation. You are now verified. Let's enjoy your journey <3")}
      ></Result>
    );
  }
};

export default Verify;
