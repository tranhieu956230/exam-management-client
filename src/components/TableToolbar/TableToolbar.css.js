import { makeStyles, lighten } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  title: {
    marginRight: "auto"
  },
  toolbar: {
    display: "flex",
    borderBottom: "1px solid #ccc"
  },
  highlight: {
    color: theme.palette.primary.A400,
    backgroundColor: lighten(theme.palette.primary.light, 0.8)
  },
  button: {
    marginLeft: theme.spacing(2)
  }
}));
