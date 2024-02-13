import { Col, Row, Divider, Typography } from "antd";

export default function SettingSection({ title, description, children }) {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Typography.Title level={4}>{title}</Typography.Title>
        <Typography.Text type="secondary">{description}</Typography.Text>
      </Col>

      <Col
        xl={{ span: 18, offset: 2 }}
        lg={{ span: 24 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        {children}
      </Col>

      <Divider></Divider>
    </Row>
  );
}
