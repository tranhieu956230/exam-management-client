import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}));

const Rooms = () => {
    const styles = useStyles();

    return (
        <Box component={"div"} className={styles.root}>
            <h1>Rooms</h1>
        </Box>
    );
};

export default Rooms;
