"use client";

import React, { Suspense, useEffect } from "react";
import { Layout, Spin, theme } from "antd";
import { fetchProductList } from "@/services/productService";
import { getCategoryRequest } from "@/services/categoryService";
import LeftMenu from "@/components/LeftMenu";
import { useSelector } from "react-redux";
import { categoryListSelector } from "@/state/category/categoryState";
import TableComponent from "@/components/TableComponent";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const categoryList = useSelector(categoryListSelector);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    fetchProductList();
    getCategoryRequest();
  }, []);

  return (
    <Suspense fallback={<Spin size="large" />}>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftMenu categoryList={categoryList} />
        <Layout>
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <TableComponent />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Home24 - Harshan</Footer>
        </Layout>
      </Layout>
    </Suspense>
  );
};

export default App;
