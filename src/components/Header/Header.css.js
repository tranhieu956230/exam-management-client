import { lighten, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  avatar: {
    marginRight: theme.spacing(1)
  },
  avatarDiv: {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    transition: "background-color .2s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)"
    }
  },
  root: {
    zIndex: theme.zIndex.drawer + 1
  },
  container: {
    justifyContent: "space-between"
  },
  name: {
    fontWeight: "500",
    color: "white"
  },
  icon: {
    marginRight: "8px"
  }
}));
