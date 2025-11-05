// import { useThemeContext } from "../../contexts/ThemeContext";
import ThemeToggle from "../ThemeToggle";
// import { ConfigProvider, Layout, theme } from "antd";

function Header() {
  // const curTheme = useThemeContext();

  return (
    // <Layout>
    // <ConfigProvider
    //   theme={{
    //     algorithm:
    //       curTheme.theme === "dark"
    //         ? theme.darkAlgorithm
    //         : theme.defaultAlgorithm,
    //   }}
    // >
    //   <Layout>
    //     <Layout.Header className="flex justify-between items-center p-4">
    //       {/* <Layout.Sider theme={(theme.theme || "dark") as any}> */}
    //       <div className="text-lg font-semibold">Weather App</div>
    //       <ThemeToggle />
    //       {/* </Layout.Sider> */}
    //     </Layout.Header>
    //   </Layout>
    // </ConfigProvider>
    // </Layout>
    <header className="header flex justify-between items-center p-4">
      <div className="text-lg font-semibold">Weather App</div>
      <ThemeToggle />
    </header>
  );
}

export default Header;
