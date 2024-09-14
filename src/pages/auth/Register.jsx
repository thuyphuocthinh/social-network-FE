import React, { useState } from "react";
import { LoadingOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import { TOKEN } from "../../config/constant";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { userRegisterAction } from "../../store/actions/userActions";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    const user = {
      email: values.email,
      password: values.password,
      username: values.username,
    };
    try {
      setLoading(true);
      setTimeout(async () => {
        const result = await authService.registerService(user);
        if (result.status === 200 && result.data.success) {
          const data = result.data.data;
          const token = data.token;
          const user = {
            id: data.id,
            roleId: data.roleId,
            email: data.email,
            avatar: data.avatar,
            username: data.username,
          };
          // store token to cookies
          Cookies.set(TOKEN, token);
          // dispatch user to reducer
          dispatch(userRegisterAction(user));
          // toast
          toast.success(result.data.message);
          // push to homepage
          navigate("/home");
        } else {
          toast.error(result.data.message);
        }
        // set loading
        setLoading(false);
      }, 800);
    } catch (error) {
      console.log("Register error: ", error);
    }
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
        <Button
          block
          type="primary"
          htmlType="submit"
          icon={loading ? <LoadingOutlined /> : ""}
        >
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
