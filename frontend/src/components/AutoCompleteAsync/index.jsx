import { DEBOUNCE_500 } from "@/constants/common";
import useOnFetch from "@/hooks/useOnFetch";
import useDebounce from "@/hooks/useDebounce";
import request from "@/services/request";
import { Empty, Select } from "antd";
import { useEffect, useRef, useState } from "react";

//TODO: Complete Auto Complete Async
export default function AutoCompleteAsync({
  entity,
  displayLabels,
  searchFields,
  outputValue = "_id",
  value,
  onChange,
}) {
  let { onFetch, result, isSuccess, isLoading } = useOnFetch();
  const [selectOptions, setSelectOptions] = useState([]);
  const [currentValue, setCurrentValue] = useState(undefined);

  const isUpdating = useRef(false);
  const isSearching = useRef(false);

  const [searching, setSearching] = useState(false);
  const [valToSearch, setValToSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const [, cancel] = useDebounce(
    () => {
      setDebouncedValue(valToSearch);
    },
    DEBOUNCE_500,
    [valToSearch]
  );

  const asyncSearch = async (options) => {
    return await request.search({ entity, options });
  };

  const labels = (optionField) => {
    return displayLabels.map((x) => optionField[x].join(" "));
  };

  const onSearch = (searchText) => {
    if (searchText && searchText != "") {
      isSearching.current = true;
      setSearching(true);
      setSelectOptions([]);
      setCurrentValue(undefined);
      setValToSearch(searchText);
    }
  };

  useEffect(() => {
    if (debouncedValue != "") {
      const options = {
        q: debouncedValue,
        fields: searchFields,
      };
      const callback = asyncSearch(options);
      onFetch(callback);
    }

    return () => {
      cancel();
    };
  }, [debouncedValue]);

  useEffect(() => {
    if (isSearching.current) {
      if (isSuccess) {
        setSelectOptions(result);
      } else {
        setSearching(false);
        setCurrentValue(undefined);
        setSelectOptions([]);
      }
    }
  }, [isSuccess, result]);

  useEffect(() => {
    if (value && isUpdating.current) {
      if (!isSearching.current) {
        setSelectOptions([value]);
      } else {
        setCurrentValue(value[outputValue] || value);
        onChange(value[outputValue] || value);
        isUpdating.current = false;
      }
    }
  }, [value]);

  return (
    <Select
      loading={isLoading}
      showSearch
      allowClear
      placeholder="search"
      defaultActiveFirstOption={false}
      filterOption={false}
      notFoundContent={searching ? "... searching" : <Empty />}
      value={currentValue}
      onSearch={onSearch}
      onChange={(newValue) => {
        if (onChange) {
          if (newValue) onChange(newValue[outputValue] || newValue);
        }
      }}
      onClear={() => {
        setSelectOptions([]);
        setCurrentValue(undefined);
        setSearching(false);
      }}
    >
      {selectOptions.map((optionField) => (
        <Select.Option
          key={optionField[outputValue] || optionField}
          value={optionField[outputValue] || optionField}
        >
          {labels(optionField)}
        </Select.Option>
      ))}
    </Select>
  );
}
