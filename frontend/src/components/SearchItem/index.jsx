import { DEBOUNCE_500 } from "@/constants/common";
import { useCrudContext } from "@/context/crudContext";
import useDebounce from "@/hooks/useDebounce";
import { crud } from "@/redux/crudRedux/action";
import { selectSearchedItem } from "@/redux/crudRedux/selector";
import { Empty, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SearchItemComponent({ config, onRerender }) {
  let { entity, searchConfig, PANEL_TITLE } = config;
  const [isSearching, setIsSearching] = useState(false);
  const dispatch = useDispatch();
  const { result: currentResult, isLoading, isSuccess } = useSelector(selectSearchedItem);
  const { crudContextAction } = useCrudContext();
  const { displayLabels, searchFields, outputValue = "_id" } = searchConfig;
  const { panel, collapsedBox, readBox } = crudContextAction;

  const [selectOptions, setSelectOptions] = useState([]);
  const [currentValue, setCurrentValue] = useState(undefined);
  const [searching, setSearching] = useState("");
  const [valToSearch, setValToSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const onSelect = (data) => {
    const currentItem = currentResult.find((item) => {
      return item[outputValue] === data;
    });

    dispatch(crud.currentItem({ data: currentItem }));

    panel.open();
    collapsedBox.open();
    readBox.open();
    onRerender();
  };

  const onSearch = (searchText) => {
    if (searchText && searchText != "") {
      setIsSearching(true);
      setSearching(true);
      setSelectOptions([]);
      setCurrentValue(undefined);
      setValToSearch(searchText);
    }
  };

  const [cancel] = useDebounce(
    () => {
      setDebouncedValue(valToSearch);
    },
    DEBOUNCE_500,
    [valToSearch]
  );

  const labels = (optionField) => {
    return displayLabels.map((x) => optionField[x]).join(" ");
  };

  useEffect(() => {
    if (debouncedValue != "") {
      const options = {
        q: debouncedValue,
        fields: searchFields,
      };

      dispatch(crud.search({ entity, options }));
    }

    return () => {
      cancel();
    };
  }, [debouncedValue]);

  useEffect(() => {
    if (isSearching) {
      if (isSuccess) {
        setSelectOptions(currentResult);
      } else {
        setSearching(false);
        setCurrentValue(undefined);
        setSelectOptions([]);
      }
    }
  }, [isSuccess, currentResult]);

  return (
    <Select
      loading={isLoading}
      showSearch
      allowClear
      placeholder={`${"Search " + PANEL_TITLE}`}
      defaultActiveFirstOption={false}
      filterOption={false}
      notFoundContent={searching ? "...Searching" : <Empty />}
      value={currentValue}
      onSearch={onSearch}
      style={{ width: "100%" }}
      onSelect={onSelect}
    >
      {selectOptions.map((option) => (
        <Select.Option key={option[outputValue]} value={option[outputValue]}>
          {labels(option)}
        </Select.Option>
      ))}
    </Select>
  );
}

export default function SearchItem({ config }) {
  const [state, setState] = useState([0]);

  const onRerender = () => {
    setState([state + 1]);
  };

  return state.map((item) => (
    <SearchItemComponent key={item} config={config} onRerender={onRerender} />
  ));
}
