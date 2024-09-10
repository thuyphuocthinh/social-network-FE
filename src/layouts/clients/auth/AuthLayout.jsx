import React from "react";
import "./AuthLayout.scss";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Content, Sider } = Layout;

const AuthLayout = () => {
  return (
    <Layout className="auth-layout">
      <Content>
        <Layout className="auth-main-layout">
          <Sider className="auth-sider"></Sider>
          <Content className="auth-content">
          <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default AuthLayout;
