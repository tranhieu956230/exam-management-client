import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  search: {
    backgroundColor: theme.palette.grey[200],
    "&:hover": {
      backgroundColor: theme.palette.grey[300]
    },
    color: "rgb(51, 51, 51)",
    transition: "all 0.3s",
    padding: "4px",
    borderRadius: "5px",
    width: "min-content",
    position: "relative"
  },

  searchIcon: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    top: "50%",
    transform: "translateY(-50%)",
    marginLeft: "6px",
    color: theme.palette.grey[700]
  },

  filter: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    top: "50%",
    transform: "translateY(-50%)",
    right: "2%"
  },

  inputRoot: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    justifyContent: "space-between",
    width: "250px",
    "&:hover": {
      width: "300px"
    },
    transition: "all .3s ease",
    transformOrigin: "center center"
  },

  inputFocus: {
    width: "300px"
  }
}));
