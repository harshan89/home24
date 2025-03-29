"use client";

import React, { useEffect } from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { fetchProductList } from "@/services/productService";
import { getCategoryRequest } from "@/services/categoryService";
import LeftMenu from "@/components/LeftMenu";
import { useSelector } from "react-redux";
import { categoryListSelector } from "@/state/category/categoryState";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const categoryList = useSelector(categoryListSelector);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    fetchProductList(0, 10);
    getCategoryRequest();
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LeftMenu categoryList={categoryList} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Home24 - Harshan</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
