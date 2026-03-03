import { createBrowserRouter } from "react-router";
import { WeighingScreen } from "./pages/WeighingScreen";
import { ProductSelection } from "./pages/ProductSelection";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WeighingScreen,
  },
  {
    path: "/select-product",
    Component: ProductSelection,
  },
]);
