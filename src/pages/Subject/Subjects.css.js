import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  row: {
    position: "relative",
    "&:hover $icon": {
      display: "initial"
    }
  },
  toolbar: {},
  table: {},
  content: {
    flexGrow: "1",
    height: "100%",
    display: "grid",
    gridTemplateRows: "max-content 1fr max-content",
    overflowY: "auto"
  }
}));
