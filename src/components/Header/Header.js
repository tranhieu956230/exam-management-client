import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1
  }
}));

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar position={"fixed"} className={styles.root}>
      <Toolbar>
        <Typography color={"inherit"} variant={"h4"} component={"div"}>
          Exam Register
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
