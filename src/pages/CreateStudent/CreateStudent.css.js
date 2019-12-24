import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: "500px",
    padding: theme.spacing(3),
    display: "grid",
    justifySelf: "center"
  },
  form: {
    "& > :not(:last-child)": {
      marginBottom: theme.spacing(3)
    },
    marginBottom: theme.spacing(3)
  },
  text: {
    display: "block",
    width: "100%"
  },
  groupButton: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));
