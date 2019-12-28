import React, { useEffect, useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  ButtonBase,
  Menu,
  MenuItem,
  ListItemIcon,
  Popover
} from "@material-ui/core";
import { GlobalContext } from "store";
import { useStyles } from "./Header.css";
import ExitIcon from "@material-ui/icons/ExitToApp";

const Header = () => {
  const styles = useStyles();
  const { globalState, dispatch } = useContext(GlobalContext);
  const {
    auth: { name, username }
  } = globalState;

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    dispatch({ type: "SET_AUTH", payload: { isLoggedIn: false, admin: null } });
  };

  return (
    <AppBar position={"fixed"} className={styles.root}>
      <Toolbar className={styles.container}>
        <Typography color={"inherit"} variant={"h4"} component={"div"}>
          Exam Register
        </Typography>
        <ButtonBase className={styles.avatarDiv} onClick={handleLogout}>
          <ExitIcon className={styles.icon} />
          <Typography variant={"body1"} color={"inherit"} className={styles.name}>
            Đăng xuất
          </Typography>
        </ButtonBase>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
