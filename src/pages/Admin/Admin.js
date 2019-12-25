import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "components/Header";
import NavBar from "components/NavBar";
import PrivateRoute from "components/PrivateRoute";
import Subject from "pages/Subject";
import Exam from "pages/Exam";
import Shift from "pages/Shift";
import Room from "pages/Room";
import Setting from "pages/Setting";
import Student from "pages/Student";

import { useStyles } from "./Admin.css";

const Admin = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Header />
      <NavBar />
      <Switch>
        <Route path={"/ad/subject"} component={Subject} />
        <Route path={"/ad/exam"} component={Exam} />
        <Route path={"/ad/shift"} component={Shift} />
        <Route path={"/ad/room"} component={Room} />
        <Route path={"/ad/setting"} component={Setting} />
        <Route path={"/ad/student"} component={Student} />
      </Switch>
    </div>
  );
};

export default Admin;
