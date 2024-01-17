import { CrudContextProvider } from "@/context/crudContext";
import React from "react";

export default function DefaultLayout({ children }) {
  return <CrudContextProvider>{children}</CrudContextProvider>;
}
