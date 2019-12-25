import { makeStyles, darken } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "500px",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: theme.spacing(1),
    backgroundColor: "white"
  },
  heading: {
    fontWeight: "500",
    marginBottom: "3vh"
  },
  img: {
    width: "65%",
    margin: "3vh 0"
  },
  form: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    "& > :not(:last-child)": {
      width: "100%",
      marginBottom: theme.spacing(3)
    },
    marginBottom: "5vh"
  }
}));
