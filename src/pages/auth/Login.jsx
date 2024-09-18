import { useState } from "react";
import { LoadingOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../store/actions/userActions";
import { setToken } from "../../helpers/token";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    setLoading(true);
    setTimeout(async () => {
      try {
        const result = await authService.loginService(user);
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
          setToken(token);
          // dispatch user to reducer
          dispatch(userLoginAction(user));
          // push to homepage
          navigate("/home");
          // toast
          toast.success(result.data.message);
        }
      } catch (error) {
        toast.error(error.data.message);
      } finally {
        // set loading
        setLoading(false);
      }
    }, 800);
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
          {
            min: 8,
            message: "Min length is 8",
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
          <a href="#">Forgot password</a>
        </Flex>
      </Form.Item>
      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          icon={loading ? <LoadingOutlined /> : ""}
        >
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
