"use client";

import React, { Suspense, useEffect } from "react";
import { Layout, Spin, theme } from "antd";
import { fetchProductList } from "@/services/productService";
import { getCategoryRequest } from "@/services/categoryService";
import LeftMenu from "@/components/LeftMenu";
import { useSelector } from "react-redux";
import { categoryListSelector } from "@/state/category/categoryState";
import TableComponent from "@/components/TableComponent";
import { productListSelector } from "@/state/product/productState";
import { ColumnsType } from "antd/es/table";
import { ISerializedProduct } from "@/models/product/IProduct";
import LastModifiedProduct from "@/components/LastModifiedProduct";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const categoryList = useSelector(categoryListSelector);
  const productList = useSelector(productListSelector);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    fetchProductList({
      page: 0,
      limit: 10,
      category: 5,
    });
    getCategoryRequest();
  }, []);

  const productTableColumns: ColumnsType<Partial<ISerializedProduct>> = [
    {
      title: "Product name",
      dataIndex: "name",
      sorter: (a, b) => a.name!.localeCompare(b.name!),
    },
    {
      title: "Category Type",
      dataIndex: "categoryType",
      filters: [
        { text: "Furniture", value: "furniture" },
        { text: "Garden", value: "garden" },
        { text: "Lamp", value: "lamp" },
        { text: "Bathroom", value: "bathroom" },
        { text: "Kitchen", value: "kitchen" },
        { text: "Office", value: "office" },
        { text: "Decor", value: "decor" },
        { text: "Outdoor", value: "outdoor" },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) =>
        record.categoryType!.includes(value as string),
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price! - b.price!,
    },
    {
      title: "Product Description",
      dataIndex: "description",
    },
  ];

  return (
    <Suspense fallback={<Spin size="large" />}>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftMenu categoryList={categoryList} />
        <Layout>
          {productList && <LastModifiedProduct product={productList[0]} />}
          <Content style={{ margin: "0 16px" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <TableComponent
                dataSource={productList!}
                columns={productTableColumns}
              />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Home24 - Harshan</Footer>
        </Layout>
      </Layout>
    </Suspense>
  );
};

export default App;
