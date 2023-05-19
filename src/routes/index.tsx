import { MainLayout } from "../layouts/MainLayout";
import { SearchPage } from "../pages/Search";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <SearchPage />,
      },
      {
        path: "/search/:term",
        element: <SearchPage />,
      },
    ],
  },
]);
