import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const ProductCategory = lazy(() => import("@/pages/ProductCategory"));
const ExpenseCategory = lazy(() => import("@/pages/ExpenseCategory"));
const Product = lazy(() => import("@/pages/Product"));
const Company = lazy(() => import("@/pages/Company"));
const People = lazy(() => import("@/pages/People"));
const Customer = lazy(() => import("@/pages/Customer"));
const Lead = lazy(() => import("@/pages/Lead"));
const Expense = lazy(() => import("@/pages/Expense"));
const Admin = lazy(() => import("@/pages/Admin"));
const Setting = lazy(() => import("@/pages/Settings/Setting"));

const Verify = lazy(() => import("@/pages/Auth/Verify"));
const Logout = lazy(() => import("@/pages/Auth/Logout"));

export default function AppRouter() {
  const element = useRoutes([
    {
      path: '/login',
      element: <Navigate to="/" />,
    },
    {
      path: '/verify/*',
      element: <Verify />,
    },
    {
      path: '/logout',
      element: <Logout />,
    },
    {
      path: "/category/product",
      element: <ProductCategory />,
    },
    {
      path: "/category/expense",
      element: <ExpenseCategory />,
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
    {
      path: "/customer",
      element: <Customer />,
    },
    {
      path: "/lead",
      element: <Lead />,
    },
    {
      path: "/expense",
      element: <Expense />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/settings",
      element: <Setting />,
    },
  ]);

  return element;
}
