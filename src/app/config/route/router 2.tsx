import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/pages/home";
import { getHomeRoute } from "@/shared/libs/constants/routes/routes";

export const router = createBrowserRouter([
  {
    path: getHomeRoute(),
    element: <HomePage />,
  },
]);