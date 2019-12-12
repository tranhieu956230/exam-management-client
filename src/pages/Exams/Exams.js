import React from "react";
import { exams } from "data";
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Fab,
  Toolbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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

const Exams = () => {
  const styles = useStyles();

  return (
    <Box component={"div"} className={styles.root}>
      <Toolbar />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Mã kì thi</TableCell>
            <TableCell>Môn thi</TableCell>
            <TableCell>Mã học phần</TableCell>
            <TableCell>Ngày bắt đầu</TableCell>
            <TableCell>Ngày kết thúc</TableCell>
            <TableCell>Số ca thi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exams.map(
            ({ id, subject, subjectID, startDate, endDate, noShift }) => (
              <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell>{subject}</TableCell>
                <TableCell>{subjectID}</TableCell>
                <TableCell>{startDate}</TableCell>
                <TableCell>{endDate}</TableCell>
                <TableCell>{noShift}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      <Fab color={"primary"} size={"medium"} className={styles.fab}>
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default Exams;
