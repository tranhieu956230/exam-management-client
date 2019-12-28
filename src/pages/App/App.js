import React, { useEffect, useContext } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Login from "pages/Login";
import Admin from "pages/Admin";
import StudentPage from "pages/StudentPage";
import PrivateRoute from "components/PrivateRoute";

import { logIn } from "apis/authen";
import { GlobalContext } from "store";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const App = ({ history }) => {
  const { globalState, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    let auth = localStorage.getItem("jwt");
    let role = localStorage.getItem("role");
    if (auth) {
      dispatch({
        type: "SET_AUTH",
        payload: {
          isLoggedIn: true
        }
      });
      if (role === "admin") history.push("/ad/student");
      else history.push("/st/shift");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path={"/login"} render={() => <Login />} />
        <PrivateRoute path={"/ad"} component={Admin} />
        <PrivateRoute path={"/st"} component={StudentPage} />
        <Route path={"/"} render={() => <Redirect to={"/login"} />} />
      </Switch>
    </ThemeProvider>
  );
};

export default withRouter(App);
