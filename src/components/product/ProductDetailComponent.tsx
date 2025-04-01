import IProduct from "@/models/product/IProduct";
import { Card, Form, Input, Button, FormProps } from "antd";
import { FC, useState } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import useNotification from "@/hooks/useNotification";
import {
  deleteProductService,
  updateProductService,
} from "@/services/productService";

interface Props {
  product: IProduct;
  closeProductDetailDrawer: () => void;
}

const ProductDetailComponent: FC<Props> = ({
  product,
  closeProductDetailDrawer,
}) => {
  const { notify, contextHolder } = useNotification();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const deleteProduct = (id: number) => {
    deleteProductService(id);
    // Todo: this notification should run from SAGA
    notify({
      type: "success",
      message: "Product deleted successfully",
    });
    closeProductDetailDrawer();
  };

  const onFinish: FormProps<any>["onFinish"] = (values) => {
    const { product_name, product_description } = values;
    updateProductService({
      id: product.id,
      name: product_name,
      description: product_description,
    });
    // Todo: this notification should run from SAGA
    notify({
      type: "success",
      message: "Product deleted successfully",
    });
    setIsEdit(false);
    closeProductDetailDrawer();
  };

  return (
    <div className="flex w-full justify-center">
      {contextHolder}
      {!isEdit ? (
        <Card
          style={{ width: 300 }}
          cover={
            <Image
              src={product.image!}
              alt="Ergonomic Chair"
              width={30}
              height={30}
              unoptimized
            />
          }
          actions={[
            <EditFilled
              style={{ fontSize: "30px" }}
              onClick={() => setIsEdit(true)}
              key="edit-product"
            />,
            <DeleteFilled
              style={{ fontSize: "30px" }}
              onClick={() => deleteProduct(product.id!)}
              key="delete-product"
            />,
          ]}
        >
          <Meta title={product.name} description={product.description} />
        </Card>
      ) : (
        <div className="border-[1px] border-[#ff4d4f] px-6 pt-4 rounded-2xl">
          <Image
            src={product.image!}
            alt="Ergonomic Chair"
            width={200}
            height={30}
            unoptimized
            className="pb-5"
          />
          <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
              product_name: product.name,
              product_description: product.description,
            }}
          >
            <div className="pt-2">
              <Form.Item
                name="product_name"
                rules={[
                  { required: true, message: "Please enter product name" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Product name"
                  defaultValue={product.name}
                />
              </Form.Item>
            </div>

            <div className="pt-2">
              <Form.Item
                name="product_description"
                rules={[
                  {
                    // Removed defaultValue as initialValues is used
                    message: "Please enter product description",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Product description"
                  defaultValue={product.description}
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
                  Update Product
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ProductDetailComponent;
