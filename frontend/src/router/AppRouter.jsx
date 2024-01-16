import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const ProductCategory = lazy(() => import("@/pages/ProductCategory"));
const Product = lazy(() => import("@/pages/Product"));
const Company = lazy(() => import("@/pages/Company"));
const People = lazy(() => import("@/pages/People"));

export default function AppRouter() {
  const element = useRoutes([
    {
      path: "/category/product",
      element: <ProductCategory />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/company",
      element: <Company />,
    },
    {
      path: "/people",
      element: <People />,
    },
  ]);

  return element;
}
