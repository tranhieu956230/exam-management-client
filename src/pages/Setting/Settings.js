import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const Settings = () => {
  const styles = useStyles();

  return (
    <Box component={"div"} className={styles.root}>
      <h1>Settings</h1>
    </Box>
  );
};

export default Settings;
