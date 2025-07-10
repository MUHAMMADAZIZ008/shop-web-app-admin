import { Layout, Menu, Typography } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTelegram } from "../hooks/use-telegram";
import React from "react";

const { Content, Footer } = Layout;
const { Text } = Typography;


interface LayoutType {
  key: string;
  icon: React.ReactNode;
  path: string;
}

const layoutItems: LayoutType[] = [
  { key: "/", icon: <HomeOutlined className="w-7 block" />, path: "/" },
  {
    key: "/products",
    icon: <ShoppingCartOutlined className="w-7 block" />,
    path: "/products",
  },
  {
    key: "/categories",
    icon: <AppstoreOutlined className="w-7 block" />,
    path: "/categories",
  },
  {
    key: "/profile",
    icon: <UserOutlined className="w-7 block" />,
    path: "/profile",
  },
];

const MainLayout = () => {
  const { isDarkMode, themeParams } = useTelegram();
  const location = useLocation();
  const navigate = useNavigate();

  const selectedKey = location.pathname;
  const bgColor = themeParams.bg_color || (isDarkMode ? "#1c2526" : "#ffffff");

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: "100vh", background: bgColor }}>
      <Layout>
        <Content
          style={{
            padding: "16px",
            paddingBottom: "60px",
            background: bgColor,
          }}
        >
          <Text strong>
            Rejim: {isDarkMode ? "Qorong'u rejim" : "Yorug' rejim"}
          </Text>
          <div style={{ marginTop: 16 }}>
            <Outlet />
          </div>
        </Content>

        <Footer
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            padding: 0,
            background: bgColor,
            boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            onClick={handleMenuClick}
            items={layoutItems.map((item) => ({
              key: item.key,
              icon: (
                <div className="flex items-center justify-center">
                  {item.icon}
                </div>
              ),
            }))}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              fontSize: 22,
              borderTop: "1px solid #ddd",
              padding: "10px 0",
              background: "transparent",
            }}
          />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
