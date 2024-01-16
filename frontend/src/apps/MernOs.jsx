import { lazy, Suspense } from "react";
import PageLoader from "@/components/PageLoader";
import { AppContextProvider } from "@/context/appContext";

const ErpApp = lazy(() => import("./ErpApp"));

const DefaultApp = () => (
  <AppContextProvider>
    <Suspense fallback={<PageLoader />}>
      <ErpApp />
    </Suspense>
  </AppContextProvider>
);

export default function MernOs() {
  return <DefaultApp />;
}
