import { selectMoneyFormat } from "@/redux/setting/selector";
import storePersist from "@/redux/storePersist";
import currency from "currency.js";
import { useSelector } from "react-redux";

const useMoney = () => {
  const money_format_settings = useSelector(selectMoneyFormat);

  const settingState = storePersist.get("settings")
    ? storePersist.get("settings")
    : { money_format_settings };

  const {
    currency_symbol,
    currency_position,
    decimal_sep,
    thousand_sep,
    cent_precision,
    zero_format,
  } = settingState.money_format_settings;

  function currencyFormat(amount) {
    return currency(amount).dollars() > 0
      ? currency(amount, {
          separator: thousand_sep,
          decimal: decimal_sep,
          symbol: "",
          precision: cent_precision,
        }).format()
      : 0 +
          currency(amount, {
            separator: thousand_sep,
            decimal: decimal_sep,
            symbol: "",
            precision: cent_precision,
          }).format();
  }

  function moneyFormatter({ amount = 0 }) {
    return currency_position === "after"
      ? currencyFormat(amount) + " " + currency_symbol
      : currency_symbol + " " + currencyFormat(amount);
  }

  return {
    moneyFormatter,
    currency_symbol,
    currency_position,
    decimal_sep,
    thousand_sep,
    cent_precision,
    zero_format,
  };
};

export default useMoney;
