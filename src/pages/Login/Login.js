import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Button, TextField, Box, Typography } from "@material-ui/core";

import { GlobalContext } from "store";
import { logIn } from "apis/authen";
import { useStyles } from "./Login.css";
import VNULogo from "images/logo.png";

const Login = ({ history }) => {
  const styles = useStyles();
  const { dispatch } = useContext(GlobalContext);

  const handleLogin = () => {
    logIn().then(result => {
      dispatch({ type: "SET_AUTHEN", payload: result });
      localStorage.setItem("jwt", "test");
      let location = result.role === 0 ? "/ad/student" : "/st";
      history.push(location);
    });
  };

  return (
    <div className={styles.root}>
      <Box boxShadow={5} className={styles.container}>
        <img src={VNULogo} alt={"vnu"} className={styles.img} />
        <Typography color="inherit" variant="h4" className={styles.heading}>
          Đăng nhập
        </Typography>
        <form className={styles.form}>
          <TextField variant={"outlined"} label={"Tài khoản"} />
          <TextField variant={"outlined"} label={"Mật khẩu"} />
        </form>
        <Button
          variant={"contained"}
          onClick={handleLogin}
          color={"primary"}
          className={styles.button}
          size={"large"}
        >
          Đăng nhập
        </Button>
      </Box>
    </div>
  );
};

export default withRouter(Login);
