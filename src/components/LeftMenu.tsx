import { ICategory } from "@/models/category/ICategory";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import SubMenu from "antd/es/menu/SubMenu";
import { FC, useState } from "react";

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
          <SubMenu key={category.id.toString()} title={category.name}>
            {generateMenuItems(category.subCategories)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={category.id.toString()}>{category.name}</Menu.Item>
      );
    });
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={siderStyle}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={["1"]}>
        {generateMenuItems(categoryList)}
      </Menu>
    </Sider>
  );
};

export default LeftMenu;
