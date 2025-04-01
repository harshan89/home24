import { FC, useState } from "react";
import LastModifiedProduct from "./LastModifiedProduct";
import { ISerializedProduct } from "@/models/product/IProduct";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { removeToken } from "@/utils/localStorageHelper";
import useNotification from "@/hooks/useNotification";

interface Props {
  product: ISerializedProduct | null;
}

const Header: FC<Props> = ({ product }) => {
  const [screenWidth] = useState(window.innerWidth);
  const navigator = useRouter();
  const { notify, contextHolder } = useNotification();
  const onLogout = () => {
    removeToken();
    notify({
      type: "success",
      message: "Logout Success",
    });
    setTimeout(() => {
      navigator.push("/");
    }, 500);
  };

  return (
    <div className="flex w-full justify-between">
      {contextHolder}
      <div>{product && <LastModifiedProduct product={product} />}</div>
      <div className="pt-5 pr-5">
        <Button
          type="primary"
          danger
          onClick={onLogout}
          icon={<LogoutOutlined />}
        >
          {screenWidth >= 800 && "Logout"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
