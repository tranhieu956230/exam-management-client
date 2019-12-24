import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    padding: theme.spacing(2),
    gridTemplateColumns: "300px 1fr"
  },

  left: {
    display: "flex",
    flexDirection: "column"
  },

  fileList: {
    flexGrow: "1",
    overflowY: "auto"
  },
  reviewImport: {}
}));
