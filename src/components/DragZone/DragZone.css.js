import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  dragZone: {
    width: "300px",
    height: "300px",
    border: "1px dashed #ccc",
    borderRadius: "20px",
    transition: "border .15s ease"
  },
  dragZoneHighlight: {
    borderColor: theme.palette.primary.A400
  }
}));
