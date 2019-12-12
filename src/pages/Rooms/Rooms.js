import React from "react";
import { rooms } from "data";
import {
  Box,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Toolbar,
  Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    width: "100%"
  },
  fab: {
    position: "fixed",
    right: theme.spacing(3),
    bottom: theme.spacing(4)
  }
}));

const Rooms = () => {
  const styles = useStyles();

  return (
    <Box component={"div"} className={styles.root}>
      <Toolbar />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Mã số phòng</TableCell>
            <TableCell>Tòa nhà</TableCell>
            <TableCell>Số máy</TableCell>
            <TableCell>Tình trạng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map(({ id, building, noPc, condition }) => (
            <TableRow key={id + noPc}>
              <TableCell>{id}</TableCell>
              <TableCell>{building}</TableCell>
              <TableCell>{noPc}</TableCell>
              <TableCell>{condition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Fab color={"primary"} size={"medium"} className={styles.fab}>
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default Rooms;
