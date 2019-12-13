import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "components/Header";
import Subjects from "pages/Subjects";
import Exams from "pages/Exams";
import Rooms from "pages/Rooms";
import Settings from "pages/Settings";
import Students from "pages/Students";

import { CssBaseline, Toolbar } from "@material-ui/core";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import NavBar from "../../components/NavBar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const App = () => {
  const styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <BrowserRouter>
        <div className={styles.root}>
          <NavBar />
          <Switch>
            <Route exact path={"/"} render={() => <h1>Home</h1>} />
            <Route exact path={"/subjects"} render={() => <Subjects />} />
            <Route exact path={"/exams"} render={() => <Exams />} />
            <Route exact path={"/rooms"} render={() => <Rooms />} />
            <Route exact path={"/settings"} render={() => <Settings />} />
            <Route
              exact
              path={"/students"}
              render={props => <Students {...props} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
