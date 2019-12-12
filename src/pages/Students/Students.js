import React from "react";
import students from "data/students";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Fab,
  IconButton
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InfoIcon from "@material-ui/icons/Info";

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
  },
  row: {
    position: "relative",
    "&:hover $icon": {
      display: "initial"
    }
  },
  icon: {
    position: "absolute",
    right: theme.spacing(1),
    display: "none"
  }
}));

const Students = () => {
  const styles = useStyles();

  return (
    <Box component={"div"} className={styles.root}>
      <Toolbar />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID Sinh viên</TableCell>
            <TableCell>Họ và tên</TableCell>
            <TableCell>Ngày sinh</TableCell>
            <TableCell>Lớp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map(({ id, name, dob, cls }) => (
            <TableRow key={id + dob} className={styles.row}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{dob}</TableCell>
              <TableCell>{cls}</TableCell>
              <IconButton className={styles.icon}>
                <InfoIcon />
              </IconButton>
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

export default Students;
