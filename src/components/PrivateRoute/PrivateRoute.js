import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "store";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { globalState } = useContext(GlobalContext);
  const { auth } = globalState;
  console.log(auth);
  return (
    <Route
      {...rest}
      render={props => {
        return auth.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
        );
      }}
    />
  );
};

export default PrivateRoute;
