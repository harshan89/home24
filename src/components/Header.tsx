import { FC } from "react";
import LastModifiedProduct from "./LastModifiedProduct";
import { ISerializedProduct } from "@/models/product/IProduct";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { removeToken } from "@/utils/localStorageHelper";

interface Props {
  product: ISerializedProduct | null;
}

const Header: FC<Props> = ({ product }) => {
  const navigator = useRouter();
  const onLogout = () => {
    removeToken();
    navigator.push("/");
  };

  return (
    <div className="flex w-full justify-between">
      <div>{product && <LastModifiedProduct product={product} />}</div>
      <div className="pt-5 pr-5">
        <Button
          type="primary"
          danger
          onClick={onLogout}
          icon={<LogoutOutlined />}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
