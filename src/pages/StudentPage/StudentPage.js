import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "components/Header";
import NavBar from "components/NavBar";
import Shift from "pages/Shift";
import PrivateRoute from "components/PrivateRoute";
import Subject from "pages/Subject";
import PersonIcon from "@material-ui/icons/Person";
import BookIcon from "@material-ui/icons/MenuBook";
import AlarmIcon from "@material-ui/icons/Alarm";
import RoomIcon from "@material-ui/icons/MeetingRoom";
import SettingsIcon from "@material-ui/icons/Settings";
import UploadIcon from "@material-ui/icons/Publish";
import SchoolIcon from "@material-ui/icons/School";

import { useStyles } from "./StudentPage.css";

const pages = [
  {
    title: "Ca thi",
    path: "/st/shift",
    icon: <AlarmIcon />
  }
];

const StudentPage = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Header />
      <NavBar pages={pages} />
      <Switch>
        <Route
          path={"/st/shift"}
          render={props => <Shift {...props} std={true} />}
        />
      </Switch>
    </div>
  );
};

export default StudentPage;
