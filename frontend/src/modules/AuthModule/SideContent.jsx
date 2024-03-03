import { Divider, Layout, Space, Typography } from "antd";
import logo from "@/style/images/logo.png";
import useLanguage from "@/locale/useLanguage";

export default function SideContent() {
  const translate = useLanguage();

  return (
    <Layout.Content
      style={{
        padding: "150px 30px 30px",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
      }}
      className="sideContent"
    >
      <div style={{ width: "100%" }}>
        <img
          src={logo}
          alt="MERN ERP"
          style={{ margin: "0 auto 40px", display: "block" }}
          height={63}
          width={220}
        />
        <div className="space40"></div>
        <Typography.Title level={3}>{translate("manage_your_company_with")} :</Typography.Title>
        <div className="space20"></div>
        <ul className="list-checked">
          <li className="list-checked-item">
            <Space direction="vertical">
              <Typography.Text strong>{translate("all_in_one_tool")}</Typography.Text>

              <Typography.Text>{translate("run_and_scale_your_erp_crm_apps")}</Typography.Text>
            </Space>
          </li>

          <li className="list-checked-item">
            <Space direction="vertical">
              <Typography.Text strong>{translate("easily_add_and_manage_your_services")}</Typography.Text>
              <Typography.Text>{translate("it_brings_together_your_invoice_clients_and_leads")}</Typography.Text>
            </Space>
          </li>
        </ul>
        <Divider />
      </div>
    </Layout.Content>
  );
}
