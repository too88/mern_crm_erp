import { selectCurrentLang, selectLangCode, selectLangState } from "@/redux/translate/selector";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import antdLocale from "./antdLocale";
import { ConfigProvider } from "antd";

export default function Localization({ children }) {
  const { langCode } = useSelector(selectLangCode);
  const [locale, setLocale] = useState();

  useEffect(() => {
    const lang = antdLocale[langCode];
    setLocale(lang);
  }, [langCode]);

  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: "#1640D6",
          colorLink: "#1640D6",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
