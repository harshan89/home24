"use client"

import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Card, Row, Col, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PieChartOutlined,
  DesktopOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="md"
      >
        <div
          className="logo"
          style={{ color: "white", textAlign: "center", padding: "20px" }}
        >
          Dashboard
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Analytics
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Users
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ marginRight: "16px" }}
          />
          <h2 style={{ margin: 0, flex: 1, textAlign: "center" }}>
            Admin Dashboard
          </h2>
        </Header>
        <Content style={{ margin: "16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card title="Total Users" bordered>
                1,234
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card title="Revenue" bordered>
                $12,345
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card title="Sales" bordered>
                987
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card title="New Orders" bordered>
                45
              </Card>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design Dashboard ©2025
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
