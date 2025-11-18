import { useRouteError } from "react-router-dom";
import type { RouteError } from "../../types/error";

/**
 * ErrorPage component that displays error information when an unexpected error occurs
 * This component uses react-router-dom's useRouteError hook to access and display error details
 */
export function ErrorPage() {
  // Get the error object using useRouteError hook
  const error = useRouteError() as RouteError;

  // Log the error to console for debugging purposes (optional but helpful)
  console.error(error);

  return (
    <div id="error-page" role="alert" aria-live="assertive">
      <h1 aria-label="Error occurred">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {error.status
            ? `${error.status} ${error.statusText}`
            : error.message || "An unknown error occurred"}
        </i>
      </p>
      <p>
        <button
          onClick={() => window.location.reload()}
          aria-label="Reload page"
        >
          Reload Page
        </button>
      </p>
    </div>
  );
}
