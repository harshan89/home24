"use client";

import React, { useEffect, useState } from "react";
import { Button, Drawer, DrawerProps, Layout, Space, Spin, theme } from "antd";
import { fetchProductList } from "@/services/productService";
import { getCategoryRequest } from "@/services/categoryService";
import LeftMenu from "@/components/LeftMenu";
import { useSelector } from "react-redux";
import { categoryListSelector } from "@/state/category/categoryState";
import TableComponent from "@/components/TableComponent";
import {
  productListSelector,
  productLoadingSelector,
} from "@/state/product/productState";
import { ColumnsType } from "antd/es/table";
import IProduct, { ISerializedProduct } from "@/models/product/IProduct";
import createProductModelHelper, {
  IProductSerializedUnion,
} from "@/models/product/createProductModelHelper";
import ProductDetailComponent from "@/components/ProductDetailComponent";
import { getToken } from "@/utils/localStorageHelper";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();
  const [username, setUsername] = useState("");
  const categoryList = useSelector(categoryListSelector);
  const productList = useSelector(productListSelector);
  const productLoading = useSelector(productLoadingSelector);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const navigator = useRouter();

  const showProductDetailDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const closeProductDetailDrawer = () => {
    setOpen(false);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigator.push("/");
    } else {
      setUsername(token);
      getCategoryRequest();
      fetchProductList({
        page: 0,
        limit: 10,
        category: 5,
      });
    }
  }, []);

  const productTableColumns: ColumnsType<ISerializedProduct> = [
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

  const onProductSelect = (product: ISerializedProduct) => {
    showProductDetailDrawer();
    const productModel = createProductModelHelper(
      product as IProductSerializedUnion
    );
    productModel && setSelectedProduct(productModel);
  };

  return !productLoading ? (
    <Layout style={{ minHeight: "100vh" }}>
      <LeftMenu categoryList={categoryList} />
      <Layout>
        <Header product={productList && productList[0]} />
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
              onRowSelect={onProductSelect}
            />
            <Drawer
              title={selectedProduct?.name}
              placement="right"
              size={size}
              onClose={closeProductDetailDrawer}
              open={open}
              extra={
                <Space>
                  <Button onClick={closeProductDetailDrawer}>Cancel</Button>
                  <Button type="primary" onClick={closeProductDetailDrawer}>
                    OK
                  </Button>
                </Space>
              }
            >
              {selectedProduct && (
                <ProductDetailComponent product={selectedProduct} />
              )}
            </Drawer>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Home24 - Harshan</Footer>
      </Layout>
    </Layout>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <Spin size="large" />
    </div>
  );
};

export default App;
