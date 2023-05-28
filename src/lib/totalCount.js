import { createContext, useState } from "react";

export const ContextTotal = createContext(["", () => null]);

export const TotalCountProvider = (props) => {
  const state = useState("");

  return (
    <ContextTotal.Provider value={state}>
      {props.children}
    </ContextTotal.Provider>
  );
};
