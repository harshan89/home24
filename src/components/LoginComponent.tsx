"use client";

import { userLoginRequest } from "@/services/userService";
import { Button, Form, FormProps, Input, Spin } from "antd";
import { useRouter } from "next/navigation";
import { UserOutlined, LockOutlined, SmileOutlined } from "@ant-design/icons";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import useNotification from "@/hooks/useNotification";

const LoginComponent = () => {
  const [loading, setLoading] = useState(true);
  const navigator = useRouter();
  const { notify, contextHolder } = useNotification();

  useEffect(() => {
    setLoading(false);
  }, []);

  type FieldType = {
    username?: string;
    password?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { username, password } = values;
    if (username && password) {
      userLoginRequest({ username, password, navigator, notify });
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    notify({
      type: "error",
      message: "Enter Username and Password",
    });
  };

  return !loading ? (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {contextHolder}
      <div className="border-1 border-[#dadada] px-5 pt-5 rounded-2xl">
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="flex w-full justify-center pb-8">
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>

          <div className="pt-2">
            <Form.Item<FieldType>
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                size="large"
                placeholder="Username"
                prefix={<UserOutlined />}
              />
            </Form.Item>
          </div>

          <div className="pt-2">
            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                className="w-full"
                size="large"
                placeholder="Password"
                prefix={<LockOutlined />}
              />
            </Form.Item>
          </div>

          <div className="flex w-full justify-end pt-4">
            <Form.Item label={null}>
              <Button
                type="primary"
                color="orange"
                danger
                htmlType="submit"
                size="middle"
              >
                Login
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <Spin size="large" />
    </div>
  );
};

export default LoginComponent;
