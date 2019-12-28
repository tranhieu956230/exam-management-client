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
import PersonIcon from "@material-ui/icons/Person";
import BookIcon from "@material-ui/icons/MenuBook";
import AlarmIcon from "@material-ui/icons/Alarm";
import RoomIcon from "@material-ui/icons/MeetingRoom";
import SettingsIcon from "@material-ui/icons/Settings";
import UploadIcon from "@material-ui/icons/Publish";
import SchoolIcon from "@material-ui/icons/School";

import { useStyles } from "./Admin.css";

const pages = [
  {
    title: "Sinh viên",
    path: "/ad/student",
    icon: <PersonIcon />
  },
  {
    title: "Môn học",
    path: "/ad/subject",
    icon: <BookIcon />
  },
  {
    title: "Ca thi",
    path: "/ad/shift",
    icon: <AlarmIcon />
  },
  {
    title: "Phòng thi",
    path: "/ad/room",
    icon: <RoomIcon />
  }
];

const Admin = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Header />
      <NavBar pages={pages} />
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
