import { FC } from "react";
import LastModifiedProduct from "./LastModifiedProduct";
import { ISerializedProduct } from "@/models/product/IProduct";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { removeToken } from "@/utils/localStorageHelper";
import useNotification from "@/hooks/useNotification";
import useScreenSize from "@/hooks/useScreenSize";

interface Props {
  product: ISerializedProduct | null;
}

const Header: FC<Props> = ({ product }) => {
  const { screenWidth } = useScreenSize();
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
      <div className="py-2 pr-2">
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
