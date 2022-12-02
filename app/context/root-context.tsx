import { User } from "@prisma/client";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

type State = { user: User | null; isAuthModalOpen: boolean };

type RootContextProviderProps = {
  children: React.ReactNode;
  initState: State;
};

const RootContext = createContext<
  | {
      rootState: State;
    }
  | undefined
>(undefined);

enum AuthModalActions {
  OPEN_AUTH_MODAL,
  CLOSE_AUTH_MODAL,
}

type Action = {
  type: AuthModalActions;
};

function rootStateReducer(state: State, action: Action) {
  switch (action.type) {
    case AuthModalActions.OPEN_AUTH_MODAL: {
      return {
        ...state,
        isAuthModalOpen: true,
      };
    }
    case AuthModalActions.CLOSE_AUTH_MODAL: {
      return { ...state, isAuthModalOpen: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function RootContextProvider({
  children,
  initState,
}: RootContextProviderProps) {
  const [rootState, dispatch] = useReducer(rootStateReducer, initState);

  const value = useMemo(() => ({ rootState }), [rootState]);

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
}

function useRootContext() {
  const context = useContext(RootContext);
  if (context === undefined) {
    throw new Error("useRootContext must be used within a RootContextProvider");
  }
  return context;
}

export { RootContextProvider, useRootContext };
