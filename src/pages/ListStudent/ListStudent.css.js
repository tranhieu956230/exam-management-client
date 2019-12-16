import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  row: {
    position: "relative",
    "&:hover $icon": {
      display: "initial"
    }
  }
}));
