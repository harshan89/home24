import React from "react";
import { ICategory } from "@/models/category/ICategory";
import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import { MenuItemType } from "antd/es/menu/interface";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import useScreenSize from "@/hooks/useScreenSize";
import { filterProductByCategory } from "@/services/productService";
interface Props {
  categoryList: ICategory[];
}

const LeftMenu: FC<Props> = ({ categoryList }) => {
  const { screenWidth } = useScreenSize();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (screenWidth < 800) setCollapsed(!collapsed);
  }, [screenWidth]);

  const siderStyle: React.CSSProperties = {
    overflow: "auto",
    maxHeight: "100vh",
    position: "sticky",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
    backgroundColor: "#fff",
  };

  const onSelectCategory = (id: number) => {
    console.log("category id ", id);
    filterProductByCategory(id);
  };

  const generateMenuItems = (categories: ICategory[]): MenuItemType[] => {
    return categories.map((category) => {
      if (category.subCategories && category.subCategories.length > 0) {
        return {
          key: category.id,
          label: category.name,
          icon: category.image
            ? React.createElement(require("@ant-design/icons")[category.image])
            : null,
          children: generateMenuItems(category.subCategories),
          onTitleClick: () => onSelectCategory(category.id),
        };
      }
      return {
        key: category.id,
        label: category.name,
      };
    });
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={siderStyle}
    >
      <div className="flex flex-row">
        <div className="flex w-full pl-5 py-4">
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </div>
      <Menu
        theme="light"
        items={generateMenuItems(categoryList)}
        onSelect={({ key }) => onSelectCategory(parseInt(key))}
      />
    </Sider>
  );
};

export default LeftMenu;
