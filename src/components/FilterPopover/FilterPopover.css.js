import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  popover: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
  },
  heading: {
    fontWeight: 500,
    marginBottom: theme.spacing(1)
  },
  formGroup: {
    display: "grid",
    gridTemplateColumns: "max-content max-content"
  }
}));
