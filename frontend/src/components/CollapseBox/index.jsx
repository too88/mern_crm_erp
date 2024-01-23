import { Col, Row } from "antd";

const CollapseBoxButton = ({ isOpen, onChange, title }) => {
  const show = isOpen ? { display: "block", opacity: 1 } : { display: "none", opacity: 0 };
  return (
    <div style={show} className="collapseBoxHeader" onClick={onChange}>
      {title}
    </div>
  );
};

const TopCollapseBox = ({ isOpen, children }) => {
  const show = isOpen ? { display: "block", opacity: 1 } : { display: "none", opacity: 0 };

  return (
    <div className="TopCollapseBox">
      <div style={show}>
        <Row>
          <Col span={24}>{children}</Col>
        </Row>
      </div>
    </div>
  );
};

const BottomCollapseBox = ({ isOpen, children }) => {
  const show = isOpen ? { display: "none", opacity: 0 } : { display: "block", opacity: 1 };

  return (
    <div className="BottomCollapseBox">
      <div style={show}>
        <Row>
          <Col span={24}>{children}</Col>
        </Row>
      </div>
    </div>
  );
};

export default function CollapseBox({
  buttonTitle,
  isCollapsed,
  onCollapse,
  topContent,
  bottomContent,
}) {
  const collapsed = isCollapsed ? "collapsed" : "";

  return (
    <>
      <TopCollapseBox isOpen={isCollapsed}>{topContent}</TopCollapseBox>
      <div className={"collapseBox " + collapsed}>
        <CollapseBoxButton isOpen={isCollapsed} title={buttonTitle} onChange={onCollapse} />
        <div className="whiteBg"></div>
        <BottomCollapseBox isOpen={isCollapsed}>{bottomContent}</BottomCollapseBox>
      </div>
    </>
  );
}
