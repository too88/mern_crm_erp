import useFetch from "@/hooks/useFetch";
import request from "@/services/request";
import color from "@/utils/color";
import { Select, Tag } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generate as uniqueId } from "shortid";

const SelectAsync = ({
  entity,
  displayLabels = ["name"],
  outputValue = "_id",
  redirectLabel = "",
  withRedirect = false,
  urlRedirect = "/",
  value,
  onChange,
}) => {
  const [selectOption, setSelectOption] = useState([]);
  const [currentValue, setCurrentValue] = useState(undefined);
  const {} = useFetch;
  const navigate = useNavigate();

  const asyncList = () => {
    return request.list({ entity });
  };

  const { result, isLoading: fetchIsLoading, isSuccess } = useFetch(asyncList);

  const handleSelectChange = (newValue) => {
    if (newValue === "redirectURL") {
      navigate(urlRedirect);
    } else {
      const val = newValue[outputValue] ?? newValue;
      setCurrentValue(newValue);
      onChange(val);
    }
  };

  const labels = (optionField) => {
    return displayLabels.map((x) => optionField[x]).join(" ");
  };

  const optionList = () => {
    const list = [];

    if (selectOption.length === 0 && withRedirect) {
      const value = "redirectURL";
      const label = `+ ${redirectLabel}`;
      list.push({ value, label });
    }

    selectOption.map((optionField) => {
      const value = optionField[outputValue] ?? optionField;
      const label = labels(optionField);
      const currentColor = optionField[outputValue]?.color ?? optionField?.color;
      const labelColor = color.find((x) => x.color === currentColor);
      list.push({ value, label, color: labelColor?.color });
    });

    return list;
  };

  useEffect(() => {
    if (value) {
      const val = value[outputValue] ?? value;
      setCurrentValue(val);
      onChange(val);
    }
  }, [value]);

  useEffect(() => {
    isSuccess && setSelectOption(result);
  }, [isSuccess]);

  return (
    <Select
      loading={fetchIsLoading}
      disabled={fetchIsLoading}
      value={currentValue}
      onChange={handleSelectChange}
    >
      {optionList()?.map((option) => (
        <Select.Option key={`${uniqueId()}`} value={option.value}>
          <Tag bordered={false} color={option.color}>
            {option.label}
          </Tag>
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectAsync;
