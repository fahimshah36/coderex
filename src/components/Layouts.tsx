import {AppstoreOutlined} from "@ant-design/icons";
import {Menu, MenuProps, Layout, Row} from "antd";
import React from "react";
import {Link, Outlet} from "react-router-dom";
import logo from "../components/assets/logo.png";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}

function Layouts() {
  const {Header, Content, Footer, Sider} = Layout;

  const items: MenuItem[] = [
    getItem(<Link to="/">Dashboard</Link>, "/", <AppstoreOutlined />),
  ];
  return (
    <>
      <div>
        <Layout style={{minHeight: "100vh"}}>
          <Sider breakpoint="lg" collapsedWidth="0">
            <Row justify={"center"} style={{marginBottom: "1rem"}}>
              <Link to="/">
                <img
                  className="logo"
                  src={logo}
                  alt="logo"
                  style={{marginTop: "1rem"}}
                  width={80}
                />
              </Link>
            </Row>

            <Menu
              theme="dark"
              defaultSelectedKeys={["/"]}
              mode="vertical"
              items={items}
            />
          </Sider>
          <Layout
            className="site-layout"
            style={{
              overflow: "hidden",
              minHeight: "100vh",
            }}
          >
            <Header
              style={{
                padding: 0,
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
              }}
            />
            <Content
              className="container m-auto mt-4 bg-white p-6"
              style={{
                padding: "25px 25px 0",
                height: "auto",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Outlet />
            </Content>
            <Row justify={"center"}>
              <Footer>{`Code Rex Assessment - DEVELOPED WITH ❤️ BY FAHIM SHAHRIAR`}</Footer>
            </Row>
          </Layout>
        </Layout>
      </div>
    </>
  );
}

export default Layouts;
