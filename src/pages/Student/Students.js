import React, { useState, useEffect } from "react";
import { Box, Toolbar, Paper } from "@material-ui/core";

import ListStudent from "pages/ListStudent";

import { useStyles } from "./Students.css";
import { students } from "data";

const Students = () => {
  const styles = useStyles();

  return (
    <Box component={"div"} className={styles.root}>
      <Toolbar />
      <ListStudent students={students} />
    </Box>
  );
};

export default Students;
