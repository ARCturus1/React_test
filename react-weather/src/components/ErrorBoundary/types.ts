import type { PropsWithChildren } from "react";

interface ErrorBoundaryProps extends PropsWithChildren {
  // Additional props can be added here if needed
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export type { ErrorBoundaryProps, ErrorBoundaryState };
