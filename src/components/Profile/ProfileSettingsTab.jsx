import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import "./ProfileSettingsTab.scss";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateAction } from "../../store/actions/userActions";

export default function ProfileSettingsTab() {
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const userLogin = useSelector((state) => state.userReducer.userLogin);
  const showLoading = useSelector((state) => state.loadingReducer.showLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    form1.setFieldValue("username", userLogin.username);
  }, []);

  const onFinish1 = (values) => {
    const updateInfo = {
      userId: userLogin.id,
      username: values.username,
    };
    dispatch(userUpdateAction(updateInfo));
  };

  const onFinish2 = (values) => {
    const updateInfo = {
      userId: userLogin.id,
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };
    dispatch(userUpdateAction(updateInfo));
    form2.setFieldValue("oldPassword", "");
    form2.setFieldValue("newPassword", "");
    form2.setFieldValue("confirm", "");
  };

  return (
    <div className="profile-settings">
      <div className="form form-username">
        <h5>Change username</h5>
        <Form
          layout="vertical"
          form={form1}
          onFinish={onFinish1}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your username",
              },
              {
                min: 8,
                message: "Min length is 8",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={showLoading}>
              Save changes
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="form form-password">
        <h5>Change password</h5>
        <Form
          layout="vertical"
          form={form2}
          onFinish={onFinish2}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="oldPassword"
            label="Old Password"
            rules={[
              {
                required: true,
                message: "Please input your old password",
              },
              {
                min: 8,
                message: "Min length is 8",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="newPassword"
            label="New Password"
            rules={[
              {
                required: true,
                message: "Please input your new password",
              },
              {
                min: 8,
                message: "Min length is 8",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your new password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={showLoading}>
              Save changes
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
