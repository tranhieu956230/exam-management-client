import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    width: "100%"
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    borderBottom: "1px solid #ccc"
  },
  fab: {
    position: "fixed",
    right: theme.spacing(3),
    bottom: theme.spacing(4)
  },

  row: {
    position: "relative",
    "&:hover $icon": {
      display: "initial"
    }
  },

  icon: {
    position: "absolute",
    right: theme.spacing(1),
    display: "none"
  },
  upload: {
    display: "none"
  }
}));
