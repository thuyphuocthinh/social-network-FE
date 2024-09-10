import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex } from "antd";
import { NavLink } from "react-router-dom";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      name="login"
      className="form-login"
      style={{
        width: "90%",
        maxWidth: "400px",
      }}
      onFinish={onFinish}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Login
      </h2>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
          {
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Invalid email",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="flex-end" align="center">
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
      <Form.Item>
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "20px" }}>or</div>
          <Button block type="default">
            <NavLink
              to={"/auth/register"}
              style={{ display: "block", width: "100%" }}
            >
              Register now!
            </NavLink>
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
export default Login;
