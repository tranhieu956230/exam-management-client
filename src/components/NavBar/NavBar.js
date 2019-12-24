import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  ListItemIcon,
  makeStyles
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import BookIcon from "@material-ui/icons/MenuBook";
import AlarmIcon from "@material-ui/icons/Alarm";
import RoomIcon from "@material-ui/icons/MeetingRoom";
import SettingsIcon from "@material-ui/icons/Settings";
import UploadIcon from "@material-ui/icons/Publish";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "250px"
  },
  root: {
    width: "250px"
  }
}));

const pages = [
  {
    title: "Sinh viên",
    path: "/students",
    icon: <PersonIcon />
  },
  {
    title: "Môn học",
    path: "/subjects",
    icon: <BookIcon />
  },
  {
    title: "Ca thi",
    path: "/exams",
    icon: <AlarmIcon />
  },
  {
    title: "Phòng máy",
    path: "/rooms",
    icon: <RoomIcon />
  },
  {
    title: "Nhập liệu từ Excel",
    path: "/import",
    icon: <UploadIcon />
  },
  {
    title: "Cài đặt",
    path: "/settings",
    icon: <SettingsIcon />
  }
];

const NavBar = () => {
  const styles = useStyles();

  return (
    <Drawer
      open
      variant={"permanent"}
      className={styles.root}
      classes={{ paper: styles.paper }}
    >
      <Toolbar />
      <List component={"ul"} className={styles.list}>
        {pages.map(({ title, path, icon }) => (
          <Link
            to={path}
            style={{ textDecoration: "none", color: "inherit" }}
            key={title}
          >
            <ListItem button component={"li"} className={styles.navItem}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default NavBar;
