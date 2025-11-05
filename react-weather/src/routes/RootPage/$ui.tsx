import { ConfigProvider, Layout, Menu, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Link, Outlet, useLocation } from "react-router-dom";

import { useThemeContext } from "../../contexts/ThemeContext";
import LocationTracker from "../../components/LocationTracker";

interface ThemeContext {
  theme: 'dark' | 'light';
  tokens?: { [key: string]: string };
}

type MenuItem = {
  path: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  key: string;
};

const menuItems: MenuItem[] = [
  {
    key: "main",
    //icon: <UserOutlined />,
    label: "Main",
    path: "/",
  },
  {
    key: "list",
    //icon: <VideoCameraOutlined />,
    label: "List",
    path: "/list",
  },
  {
    key: "about",
    //icon: <UserOutlined />,
    label: "About",
    path: "/about",
  },
  {
    key: "feedback",
    //icon: <UserOutlined />,
    label: "Feedback",
    path: "/feedback",
  },
];

/**
 * RootPage component for the application layout. Handles theme and menu selection.
 */

export function RootPage() {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const location = useLocation();
  const defaultKey =
    menuItems.find((i) => i.path === location.pathname)?.key || "main";

  const curThemeObject = useThemeContext() as ThemeContext;
  const curTheme = curThemeObject?.theme || "dark";

  const algorithm = curTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm;

  return (
    <ConfigProvider
      theme={{ algorithm }}
    >
      <Layout>
        <Sider theme={curTheme}>
          <Menu
            theme={curTheme}
            mode="inline"
            className="menu"
            defaultSelectedKeys={[defaultKey]}
            items={[
              ...menuItems.map((item) => ({
                ...item,
                label: <Link to={item.path}>{item.label}</Link>,
              })),
            ]}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "16px",
              padding: 24,
              minHeight: 280,
              borderRadius: borderRadiusLG,
            }}
          >
            <LocationTracker>
              <Outlet />
            </LocationTracker>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default RootPage;
