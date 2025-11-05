import React, { useEffect, type JSX } from "react";
import { Layout, message } from "antd";
import { Content } from "antd/es/layout/layout";

type ReactNode = React.ReactNode;

export function ErrorBoundary({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  useEffect(() => {
    // Basic error logging (can be expanded with Sentry or similar)
    const handleGlobalError = (err: ErrorEvent) => {
      console.error("Error caught by ErrorBoundary:", err);
      message.error("An unexpected error occurred. Please try again later.", 5);
    };
    window.addEventListener("error", handleGlobalError);
    return () => window.removeEventListener("error", handleGlobalError);
  }, []);

  return (
    <Layout>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          borderRadius: "16px",
          backgroundColor: "#f5f5f5", // Light gray background
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
