import { makeStyles, lighten } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

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
  },
  uploadInput: {
    display: "none"
  },
  buttonImport: {
    color: green[500],
    borderColor: green[300],

    "&:hover": {
      borderColor: green[500],
      backgroundColor: lighten(green[100], 0.7)
    }
  },

}));
