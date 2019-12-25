import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "store";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { globalState } = useContext(GlobalContext);
  const { authen } = globalState;
  return (
    <Route
      {...rest}
      render={props => {
        return authen.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
        );
      }}
    />
  );
};

export default PrivateRoute;
