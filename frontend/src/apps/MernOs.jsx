import { lazy, Suspense } from "react";
import PageLoader from "@/components/PageLoader";
import { AppContextProvider } from "@/context/appContext";
import { selectAuth } from '@/redux/auth/selectors';
import AuthRouter from '@/router/AuthRouter';
import { useSelector } from "react-redux";

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
  const { isLoggedIn } = useSelector(selectAuth);

  if (!isLoggedIn)
    return (
      <Localization>
        <AuthRouter />
      </Localization>
    );
  else {
    return <DefaultApp />;
  }
}
