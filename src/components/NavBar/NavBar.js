import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  makeStyles
} from "@material-ui/core";

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
    title: "Subjects",
    path: "/subjects"
  },
  {
    title: "Exams",
    path: "/exams"
  },
  {
    title: "Students",
    path: "/students"
  },
  {
    title: "Rooms",
    path: "/rooms"
  },
  {
    title: "Settings",
    path: "/settings"
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
        {pages.map(({ title, path }) => (
          <Link
            to={path}
            style={{ textDecoration: "none", color: "inherit" }}
            key={title}
          >
            <ListItem button component={"li"}>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default NavBar;
