import React, { useReducer } from "react";

const initialState = {};

const GlobalContext = React.createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, StateProvider };
