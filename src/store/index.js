import React, { useReducer } from "react";

const initialState = {
  auth: {
    isLoggedIn: false,
    admin: null,
    name: "Hiếu",
    username: ""
  }
};

const GlobalContext = React.createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_AUTH":
        return {
          ...state,
          auth: {
            ...state.auth,
            ...action.payload,
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
