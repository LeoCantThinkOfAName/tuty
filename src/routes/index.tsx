import { CreatePostPage } from "../pages/CreatePost";
import { MainLayout } from "../layouts/MainLayout";
import { PATHS } from "../constants";
import { SearchPage } from "../pages/Search";
import { SimpleLayout } from "../layouts/SimpleLayout";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: PATHS.ROOT,
    element: <MainLayout />,
    children: [
      {
        path: PATHS.ROOT,
        element: <SearchPage />,
      },
      {
        path: PATHS.SEARCH,
        element: <SearchPage />,
      },
    ],
  },
  {
    path: PATHS.CREATE_POST,
    element: <SimpleLayout />,
    children: [{ path: PATHS.CREATE_POST, element: <CreatePostPage /> }],
  },
]);
