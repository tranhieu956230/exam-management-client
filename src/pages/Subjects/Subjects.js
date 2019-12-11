import React from "react";
import { subjects } from "data";

import {
  Paper,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Toolbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    width: "100%",
  }
}));

const Subjects = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      <Toolbar />
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Course ID</TableCell>
            <TableCell>Course Name</TableCell>
            <TableCell>Lecturer</TableCell>
            <TableCell>Course Credit</TableCell>
            <TableCell>No. Participants</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subjects.map(({ id, name, credit, noParticipants, lecturer }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{lecturer}</TableCell>
              <TableCell>{credit}</TableCell>
              <TableCell>{noParticipants}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Subjects;
