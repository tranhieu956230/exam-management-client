import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },

  content: {
    marginTop: "16px",
    flexGrow: "1",
    height: "100%"
  }
}));
