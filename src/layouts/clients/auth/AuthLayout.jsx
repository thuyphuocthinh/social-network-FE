import React from "react";
import "./AuthLayout.scss";
import { Layout } from "antd";
import { Navigate, Outlet } from "react-router-dom";
const { Content, Sider } = Layout;

const AuthLayout = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }
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
