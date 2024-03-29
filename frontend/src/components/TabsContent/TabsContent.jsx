import { Col, Row, Tabs } from "antd";

const SettingLayout = ({ children }) => {
  return (
    <Col className="gutter-row" order={0}>
      <div className="whiteBox shadow" style={{ minHeight: "480px" }}>
        <div className="pad40">{children}</div>
      </div>
    </Col>
  );
};

const TopCard = ({ pageTitle }) => {
  return (
    <div
      className="whiteBox shadow"
      style={{
        color: "#595959",
        fontSize: 13,
        height: "70px",
        minHeight: "auto",
        marginBottom: "24px",
      }}
    >
      <div className="pad20 strong" style={{ textAlign: "center", justifyContent: "center" }}>
        <h2 style={{ color: "#22075e", marginBottom: 0, marginTop: 0 }}>{pageTitle}</h2>
      </div>
    </div>
  );
};

const RightMenu = ({ children, pageTitle }) => {
  return (
    <Col
      className="gutter-row"
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 7 }}
      lg={{ span: 6 }}
      order={1}
    >
      <TopCard pageTitle={pageTitle} />
      <div className="whiteBox shadow">
        <div className="pad25" style={{ width: "100%", paddingBottom: 0 }}>
          {children}
        </div>
      </div>
    </Col>
  );
};

export default function TabsContent({ content, pageTitle }) {
  const items = content.map((item, index) => {
    return {
      key: item.key ? item.key : index + "_" + item.label.replace(/ /g, "_"),
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          {item.icon} <span style={{ paddingRight: 30 }}>{item.label}</span>
        </div>
      ),
      children: <SettingLayout>{item.children}</SettingLayout>,
    };
  });

  const renderTabBar = (props, DefaultTabBar) => (
    <RightMenu pageTitle={pageTitle}>
      <DefaultTabBar {...props} />
    </RightMenu>
  );
  
  return (
    <Row gutter={[24, 24]} className="tabContent">
      <Tabs
        tabPosition="right"
        hideAdd={true}
        items={items}
        renderTabBar={renderTabBar}
      ></Tabs>
    </Row>
  );
}
