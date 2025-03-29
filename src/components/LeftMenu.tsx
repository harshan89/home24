import { ICategory } from "@/models/category/ICategory";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import SubMenu from "antd/es/menu/SubMenu";
import Image from "next/image";
import { FC, useState } from "react";
import logo from "@/assets/logo.svg";
interface Props {
  categoryList: ICategory[];
}

const LeftMenu: FC<Props> = ({ categoryList }) => {
  const [collapsed, setCollapsed] = useState(false);

  const siderStyle: React.CSSProperties = {
    overflow: "auto",
    maxHeight: "100vh",
    position: "sticky",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
  };

  const generateMenuItems = (categories: ICategory[]): React.ReactNode[] => {
    return categories.map((category) => {
      if (category.subCategories && category.subCategories.length > 0) {
        return (
          <SubMenu key={category.id} title={category.name}>
            {generateMenuItems(category.subCategories)}
          </SubMenu>
        );
      }
      return <Menu.Item key={category.id}>{category.name}</Menu.Item>;
    });
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={siderStyle}
    >
      <div className="flex w-full pl-5 py-4">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]}>
        {generateMenuItems(categoryList)}
      </Menu>
    </Sider>
  );
};

export default LeftMenu;
