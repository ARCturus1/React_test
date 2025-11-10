import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../routes/ErrorPage";
import RootPage from "../routes/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        lazy: async () => ({
          Component: (await import("../routes/MainPage")).default,
          errorElement: <ErrorPage />,
        }),
      },
      {
        path: "list",
        children: [
          {
            path: "",
            lazy: async () => ({
              Component: (await import("../routes/ListPage")).default,
              errorElement: <ErrorPage />,
            }),
          },
          {
            path: ":id",
            lazy: async () => ({
              Component: (await import("../routes/CityDetails")).default,
              errorElement: <ErrorPage />,
            }),
          },
        ],
      },
      {
        path: "about",
        lazy: async () => ({
          Component: (await import("../routes/AboutPage")).default,
          errorElement: <ErrorPage />,
        }),
      },
      {
        path: "feedback",
        lazy: async () => ({
          Component: (await import("../routes/FeedbackPage")).default,
          errorElement: <ErrorPage />,
        }),
      },
      {
        path: "*",
        lazy: async () => ({
          Component: (await import("../routes/NotFound")).default,
          errorElement: <ErrorPage />,
        }),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
