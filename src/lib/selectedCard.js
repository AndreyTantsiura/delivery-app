import { createContext, useState } from "react";

export const ContextCard = createContext([]);

export const SelectedCardId = (props) => {
  const state = useState([]);

  return (
    <ContextCard.Provider value={state}>{props.children}</ContextCard.Provider>
  );
};
