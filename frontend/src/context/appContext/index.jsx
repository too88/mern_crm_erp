import { initialState, contextReducer } from "./reducer";
import contextAction from "./action";
import { createContext, useContext, useMemo, useReducer } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  const [state, dispatch] = context;
  const appContextAction = contextAction(dispatch);

  return { state, appContextAction };
}

export { AppContextProvider, useAppContext };
