import React, { useReducer } from "react";

const initialState = {
  authen: {
    isLoggedIn: true,
    role: 0
  }
};

const GlobalContext = React.createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_AUTHEN":
        return {
          ...state,
          authen: {
            ...action.payload
          }
        };
      default:
        return state;
    }
  }, initialState);
  return (
    <GlobalContext.Provider value={{ globalState: state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, StateProvider };
