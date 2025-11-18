import React, { Component, type ReactNode } from "react";
import { Layout, message } from "antd";
import { Content } from "antd/es/layout/layout";
import type { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log error to console
    console.error("Error caught by ErrorBoundary:", error, errorInfo);

    // Show error message to user
    message.error("An unexpected error occurred. Please try again later.", 5);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Layout className="min-h-screen p-6">
          <Content className="m-6 mx-4 p-6 min-h-70 rounded-xl bg-gray-100 text-center flex flex-col justify-center items-center">
            <h2 className="text-red-500 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We're sorry, but an unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 bg-blue-600 text-white border-none rounded-lg cursor-pointer text-sm"
            >
              Refresh Page
            </button>
          </Content>
        </Layout>
      );
    }

    return this.props.children;
  }
}