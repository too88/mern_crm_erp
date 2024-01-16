import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '@/redux/store'
import PageLoader from "@/components/PageLoader"

const MernOs = lazy(() => import("./apps/MernOs"))

export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Suspense fallback={<PageLoader />}>
                    <MernOs />
                </Suspense>
            </Provider>
        </BrowserRouter>
    )
}