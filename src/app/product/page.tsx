"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Drawer, DrawerProps, Layout, Space, Spin, theme } from "antd";
import { fetchProductList } from "@/services/productService";
import { getCategoryRequest } from "@/services/categoryService";
import LeftMenu from "@/components/LeftMenu";
import { useSelector } from "react-redux";
import { categoryListSelector } from "@/state/category/categoryState";
import TableComponent from "@/components/TableComponent";
import {
  lastModifiedProductSelector,
  productListSelector,
  productLoadingSelector,
} from "@/state/product/productState";
import { ColumnsType } from "antd/es/table";
import IProduct, { ISerializedProduct } from "@/models/product/IProduct";
import createProductModelHelper, {
  IProductSerializedUnion,
} from "@/models/product/createProductModelHelper";
import ProductDetailComponent from "@/components/product/ProductDetailComponent";
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
  const lastModifiedProduct = useSelector(lastModifiedProductSelector);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const navigator = useRouter();

  const showProductDetailDrawer = () => {
    setSize("default");
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
      title: "",
      dataIndex: "image",
      render: (image: string) => {
        return image ? (
          <Image
            src={image}
            alt="Ergonomic Chair"
            width={30}
            height={30}
            unoptimized
          />
        ) : null;
      },
    },
    {
      title: "Product name",
      dataIndex: "name",
      sorter: (a, b) => a.name!.localeCompare(b.name!),
    },
    {
      title: "Category Type",
      dataIndex: ["category", "name"],
      filters: [
        { text: "Bathroom", value: "bathroom" },
        { text: "Furniture", value: "furniture" },
        { text: "Garden", value: "garden" },
        { text: "Lamp", value: "lamp" },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) =>
        record.categoryType?.includes(value as string),
      responsive: ["lg"],
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price! - b.price!,
    },
    {
      title: "Product Description",
      dataIndex: "description",
      responsive: ["lg"],
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
        <Header lastModifiedProduct={lastModifiedProduct} />
        <Content style={{ margin: "0 5px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div className="max-w-full overflow-x-auto">
              <TableComponent
                dataSource={productList!}
                columns={productTableColumns}
                onRowSelect={onProductSelect}
              />
            </div>
            <Drawer
              title={selectedProduct?.name}
              placement="right"
              size={size}
              onClose={closeProductDetailDrawer}
              open={open}
              extra={
                <Space>
                  <Button onClick={closeProductDetailDrawer}>Cancel</Button>
                  <Button
                    type="primary"
                    onClick={closeProductDetailDrawer}
                    style={{ backgroundColor: "#ff4d4f" }}
                  >
                    OK
                  </Button>
                </Space>
              }
            >
              {selectedProduct && (
                <ProductDetailComponent
                  product={selectedProduct}
                  closeProductDetailDrawer={closeProductDetailDrawer}
                />
              )}
            </Drawer>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Home24 - Harshan</Footer>
      </Layout>
    </Layout>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <Spin />
    </div>
  );
};

export default App;
