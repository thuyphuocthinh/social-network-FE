import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex } from "antd";
import { NavLink } from "react-router-dom";
const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      name="register"
      className="form-register"
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
        Create a new account
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
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
          {
            min: 8,
            message: "Minlength is 8",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Confirm password"
        />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Sign up
        </Button>
      </Form.Item>
      <Form.Item>
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "20px" }}>or</div>
          <Button block type="default">
            <NavLink
              to={"/auth/login"}
              style={{ display: "block", width: "100%" }}
            >
              Login now!
            </NavLink>
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
export default Register;
