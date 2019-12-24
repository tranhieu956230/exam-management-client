import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3),
  },
  form: {
    "& > :not(:last-child)": {
      marginBottom: theme.spacing(3)
    }
  },
  text: {
    display: "block",
    width: "100%"
  }
}));
