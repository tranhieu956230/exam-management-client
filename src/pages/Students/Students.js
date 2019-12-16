import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { Box, Toolbar, Paper } from "@material-ui/core";

import NavTabs from "components/NavTabs";
import ListStudent from "pages/ListStudent";

import { useStyles } from "./Students.css";

import { students } from "data";

const Students = () => {
  const styles = useStyles();
  const [tab, setTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const location = [
    {
      label: "List",
      to: "/students/list"
    }
  ];

  return (
    <Box component={"div"} className={styles.root}>
      <Toolbar />
      <NavTabs tabs={location} value={tab} onChange={handleChangeTab} />
      <Paper className={styles.content}>
        <Switch>
          <SwipeableViews index={tab}>
            <Route
              exact
              path={"/students/list"}
              render={props => <ListStudent {...props} students={students} />}
            />
          </SwipeableViews>
        </Switch>
      </Paper>
    </Box>
  );
};

export default Students;
