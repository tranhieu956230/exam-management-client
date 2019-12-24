import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

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
      label: "Danh sách",
      to: "/students/list"
    },
    {
      label: "thêm",
      to: "/students/add"
    },
    {
      label: "thêm từ excel",
      to: "/students/add-excel"
    }
  ];

  return (
    <Box component={"div"} className={styles.root}>
      <Toolbar />
      <NavTabs tabs={location} value={tab} onChange={handleChangeTab} />
      <Paper className={styles.content}>
        <Switch>
          <Route
            exact
            path={"/students/list"}
            render={props => <ListStudent {...props} students={students} />}
          />
        </Switch>
      </Paper>
    </Box>
  );
};

export default Students;
