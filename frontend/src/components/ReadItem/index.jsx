import { useCrudContext } from "@/context/crudContext";
import { selectCurrentItem } from "@/redux/crudRedux/selector";
import { dataForRead } from "@/utils/dataStructure";
import { valueByString } from "@/utils/helpers";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ReadItem({ config }) {
  let { readColumns, fields } = config;
  const { result: currentResult } = useSelector(selectCurrentItem);
  const { state } = useCrudContext();
  const { isReadBoxOpen } = state;
  const [listState, setListState] = useState([]);

  if (fields) readColumns = [...dataForRead({ fields })];

  const show = isReadBoxOpen ? { display: "block", opacity: 1 } : { display: "none", opacity: 0 };

  useEffect(() => {
    const list = [];
    readColumns.map((props) => {
      const propsKey = props.dataIndex;
      const propsTitle = props.title;

      let value = valueByString(currentResult, propsKey);

      list.push({ propsKey, value, label: propsTitle });
    });

    setListState(list);
  }, [currentResult]);

  return (
    <div style={show}>
      {listState.map((item) => {
        return (
          <Row key={item.propsKey} gutter={12}>
            <Col className="gutter-row" span={8}>
              <p>{item.label}</p>
            </Col>
            <Col className="gutter-row" span={2}>
              <p> : </p>
            </Col>
            <Col className="gutter-row" span={14}>
              <p>{item.value}</p>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}
