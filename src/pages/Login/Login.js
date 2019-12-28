import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, TextField, Box, Typography } from "@material-ui/core";

import { GlobalContext } from "store";
import { logIn } from "apis/authen";
import { useStyles } from "./Login.css";
import VNULogo from "images/logo.png";

const Login = ({ history }) => {
  const styles = useStyles();
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const { username, password } = form;

  const { dispatch } = useContext(GlobalContext);

  const handleLogin = async () => {
    const response = await logIn(username, password);
    if (response.code === 200) {
      localStorage.setItem("jwt", response["data"]["jwt"]);
      localStorage.setItem(
        "role",
        response["data"]["admin"] ? "admin" : "student"
      );
      dispatch({
        type: "SET_AUTH",
        payload: { isLoggedIn: true, admin: response.data.admin }
      });
      if (response.data.admin) {
        history.push("/ad/student");
      } else history.push("/st");
    }
  };

  const handleFormChange = field => event => {
    setForm({ ...form, [field]: event.target.value });
  };

  return (
    <div className={styles.root}>
      <Box boxShadow={5} className={styles.container}>
        <img src={VNULogo} alt={"vnu"} className={styles.img} />
        <Typography color="inherit" variant="h4" className={styles.heading}>
          Đăng nhập
        </Typography>
        <form className={styles.form}>
          <TextField
            variant={"outlined"}
            label={"Tài khoản"}
            value={username}
            onChange={handleFormChange("username")}
          />
          <TextField
            variant={"outlined"}
            label={"Mật khẩu"}
            onChange={handleFormChange("password")}
            value={password}
            type={"password"}
          />
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
