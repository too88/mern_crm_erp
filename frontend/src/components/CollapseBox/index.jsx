import { Col, Row } from "antd";

const BottomCollapseBox = ({ children }) => {
  return (
    <Row>
      <Col span={24}>{children}</Col>
    </Row>
  );
};

export default function CollapseBox({ bottomContent }) {
  return <BottomCollapseBox>{bottomContent}</BottomCollapseBox>;
}
