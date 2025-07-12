import { Layout, Menu, Typography } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { useTelegram } from "../hooks/use-telegram";

const { Content, Footer } = Layout;
const { Text } = Typography;

interface LayoutItem {
  key: string;
  icon: React.ReactNode;
  path: string;
  label: string;
}

const layoutItems: LayoutItem[] = [
  {
    key: "/",
    icon: <HomeOutlined className="block" />,
    path: "/",
    label: "Bosh sahifa",
  },
  {
    key: "/products",
    icon: <ShoppingCartOutlined className="block" />,
    path: "/products",
    label: "Mahsulotlar",
  },
  {
    key: "/categories",
    icon: <AppstoreOutlined className="block" />,
    path: "/categories",
    label: "Kategoriyalar",
  },
  {
    key: "/profile",
    icon: <UserOutlined className="block" />,
    path: "/profile",
    label: "Profil",
  },
];

const MainLayout = () => {
  const { isDarkMode = false, themeParams = { bg_color: "#ffffff" } } =
    useTelegram();
  const location = useLocation();
  const navigate = useNavigate();

  const selectedKey = location.pathname;
  const bgColor = themeParams.bg_color || (isDarkMode ? "#1c2526" : "#ffffff");
  const borderColor = isDarkMode ? "#333" : "#ddd";

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout style={{ background: bgColor, minHeight: "100vh" }}>
      <Content
        style={{
          padding: "16px",
          background: bgColor,
          minHeight: "calc(100vh - 64px)",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <div>
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          position: "fixed",
          bottom: "0",
          maxWidth: "500px",
          width: "100%",
          margin: "0 auto",
          padding: "0",
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
              <div
                className="flex flex-col items-center"
                aria-label={item.label}
              >
                {item.icon}
                {/* <span style={{ fontSize: "0.8rem", color: isDarkMode ? "#fff" : "#000" }}>
                  {item.label}
                </span> */}
              </div>
            ),
            label: item.label, // Remove hidden label since it's now part of the icon
          }))}
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            cursor: 'pointer',
            borderTop: `1px solid ${borderColor}`,
            padding: "10px 0",
            background: "transparent",
          }}
        />
      </Footer>
    </Layout>
  );
};

export default MainLayout;
