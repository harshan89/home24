"use client";

import { userLoginRequest } from "@/services/userService";
import { Button, Form, FormProps, Input } from "antd";
import { useRouter } from "next/navigation";

const LoginComponent = () => {
  const navigator = useRouter();

  type FieldType = {
    username?: string;
    password?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { username, password } = values;

    if (username === "" || password === "") {
      return false;
    }

    if (username && password) {
      userLoginRequest({ username, password, navigator });
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="border-1 border-[#dadada] p-8 rounded-2xl">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginComponent;
