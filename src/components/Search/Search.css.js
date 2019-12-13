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
    marginRight: theme.spacing(6)
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

  inputRoot: {
    marginLeft: theme.spacing(5),
    width: "180px",
    "&:hover": {
      width: "250px"
    },
    transition: "all .3s ease",
    transformOrigin: "center center"
  },

  inputFocus: {
    width: "250px"
  }
}));
