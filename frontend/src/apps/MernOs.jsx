import { lazy, Suspense } from "react";
import PageLoader from "@/components/PageLoader";
import { AppContextProvider } from "@/context/appContext";

const ErpApp = lazy(() => import("./ErpApp"));
const Localization = lazy(() => import("@/locale/Localization"));

const DefaultApp = () => (
  <Localization>
    <AppContextProvider>
      <Suspense fallback={<PageLoader />}>
        <ErpApp />
      </Suspense>
    </AppContextProvider>
  </Localization>
);

export default function MernOs() {
  return <DefaultApp />;
}
