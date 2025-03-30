"use client";

import { userLoginRequest } from "@/services/userService";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import { createContext } from "react";

const LoginComponent = () => {
  const navigator = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const Context = createContext({ name: "Default" });

  const loginErrorNotification = () => {
    api.error({
      message: "Enter both Username and Password",
      description: (
        <Context.Consumer>
          {({ name }) => "Username: Admin Password: 123"}
        </Context.Consumer>
      ),
      placement: "topRight",
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    if (username === "" || password === "") {
      loginErrorNotification();
      return false;
    }

    userLoginRequest({ username, password, navigator });
  };

  return (
    <Context.Provider value={{ name: "" }}>
      {contextHolder}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </Context.Provider>
  );
};

export default LoginComponent;
