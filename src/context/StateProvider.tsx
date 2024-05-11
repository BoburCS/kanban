import React from "react";

type StateContextType = {
  sidebarState: boolean;
  handleSidebarState: () => void;
};

const StateContext = React.createContext<StateContextType | undefined>(
  undefined,
);

export function useStateProvider() {
  const context = React.useContext(StateContext);
  if (!context) {
    throw new Error("useStateProvider must be used within a StateProvider");
  }
  return context;
}

export default function StateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarState, setSidebarState] = React.useState(true);

  const handleSidebarState = () => {
    setSidebarState(!sidebarState);
  };

  return (
    <StateContext.Provider value={{ sidebarState, handleSidebarState }}>
      {children}
    </StateContext.Provider>
  );
}
