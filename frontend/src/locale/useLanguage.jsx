import { selectCurrentLang } from "@/redux/translate/selector";
import { useSelector } from "react-redux";

const getLabel = (lang, key) => {
  try {
    const lowerCaseKey = key
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "_")
      .replace(/ /g, "_");

    return lang[lowerCaseKey];
  } catch (error) {
    return "no translate";
  }
};

const useLanguage = () => {
  const lang = useSelector(selectCurrentLang);

  const translate = (value) => getLabel(lang, value);

  return translate;
};

export default useLanguage;
