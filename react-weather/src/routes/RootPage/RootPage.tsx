import type { MenuItem } from "./types";
import { ConfigProvider, Layout, Menu, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useThemeContext } from "../../contexts/ThemeContext";
import LocationTracker from "../../components/LocationTracker";
import { Suspense } from "react";
import Spiner from "../../shared/components/Spiner";
import { HomeOutlined, UnorderedListOutlined, InfoCircleOutlined, MessageOutlined } from "@ant-design/icons";

/**
 * Array of menu items for the application navigation
 */
const menuItems: MenuItem[] = [
  {
    key: "main",
    label: "Main",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    key: "list",
    label: "List",
    path: "/list",
    icon: <UnorderedListOutlined />,
  },
  {
    key: "about",
    label: "About",
    path: "/about",
    icon: <InfoCircleOutlined />,
  },
  {
    key: "feedback",
    label: "Feedback",
    path: "/feedback",
    icon: <MessageOutlined />,
  },
];

/**
 * RootPage component for the application layout. Handles theme and menu selection.
 * This component provides the main layout structure with sidebar navigation and content area.
 * It uses React Router for navigation and Ant Design components for UI.
 */
export function RootPage() {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const location = useLocation();

  // Determine the default selected menu item based on current route
  const defaultKey =
    menuItems
      .slice(1)
      .find((item) => new RegExp(item.path, "gm").test(location.pathname))
      ?.key ?? "main";

  // Get current theme context
  const { theme: curTheme } = useThemeContext();

  // Set the appropriate theme algorithm based on current theme
  const algorithm =
    curTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm;

  return (
    <ConfigProvider theme={{ algorithm }}>
      <Layout>
        <Sider theme={curTheme as "dark" | "light"}>
          <Menu
            theme={curTheme as "dark" | "light"}
            mode="inline"
            className="menu"
            defaultSelectedKeys={[defaultKey]}
            items={menuItems.map((item) => ({
              ...item,
              label: <Link to={item.path}>{item.label}</Link>,
            }))}
          />
        </Sider>
        <Layout>
          <Content
            className="p-6 m-4 min-h-[280px] rounded-lg"
            style={{ borderRadius: borderRadiusLG }}
          >
            <LocationTracker>
              <Suspense fallback={<Spiner />}>
                <Outlet />
              </Suspense>
            </LocationTracker>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
