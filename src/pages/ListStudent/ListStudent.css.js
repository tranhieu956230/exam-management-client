import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  row: {
    position: "relative",
    "&:hover $icon": {
      display: "initial"
    }
  },
  toolbar: {},
  table: {
    overflowY: "hidden"
  },
  content: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    display: "grid",
    gridTemplateRows: "max-content 1fr max-content",
    overflowY: "auto"
  }
}));
