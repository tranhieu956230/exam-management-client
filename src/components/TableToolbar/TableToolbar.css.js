import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    borderBottom: "1px solid #ccc"
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
