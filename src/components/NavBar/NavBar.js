import React, { useState, useEffect } from "react";
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


const useStyles = makeStyles(theme => ({
  paper: {
    width: "250px"
  },
  root: {
    width: "250px"
  }
}));

const NavBar = ({pages}) => {
  const styles = useStyles();
  const [active, setActive] = useState(0);

  useEffect(() => {
    for (let i = 0; i < pages.length; i++) {
      let route = window.location.href.split("/")[4];
      if (pages[i].path.includes(route)) {
        setActive(i);
      }
    }
  }, []);

  return (
    <Drawer
      open
      variant={"permanent"}
      className={styles.root}
      classes={{ paper: styles.paper }}
    >
      <Toolbar />
      <List component={"ul"} className={styles.list}>
        {pages.map(({ title, path, icon }, index) => (
          <Link
            to={path}
            style={{ textDecoration: "none", color: "inherit" }}
            key={title}
          >
            <ListItem
              selected={index === active}
              button
              component={"li"}
              className={styles.navItem}
              onClick={() => setActive(index)}
            >
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
