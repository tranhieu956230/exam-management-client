import React, { useState } from "react";
import TableToolbar from "components/TableToolbar";
import CustomTableHead from "components/TableHead";
import CustomTablePagination from "components/TablePagination";
import CreateStudentDialog from "components/CreateStudent";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  Checkbox,
  TableRow,
  Toolbar,
  Box
} from "@material-ui/core";

import { useStyles } from "./Exam.css";
import { exams } from "data";

const Exam = () => {
  const styles = useStyles();
  const [sortIndex, setSortIndex] = useState(0);
  const [sortDir, setSortDir] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const headCells = [
    "Mã học phần",
    "Tên môn học",
    "Thời gian bắt đầu",
    "Thời gian kết thúc",
    "Số ca thi"
  ];

  const handleSelectAll = () => {
    if (exams.length === selected.length) setSelected([]);
    else setSelected([...exams]);
  };

  const handleSort = index => {
    setSortDir(prev =>
      prev === "asc" && index === sortIndex ? "desc" : "asc"
    );
    setSortIndex(index);
  };

  const handleSelect = student => {
    if (isChecked(student.id)) {
      setSelected(selected.filter(obj => obj.id !== student.id));
    } else {
      setSelected([...selected, student]);
    }
  };

  const isChecked = id => {
    let value = selected.find(student => student.id === id);
    return !!value;
  };

  const handleRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const filterData = data => {
    if (!data || data.length === 0) return [];
    let key = Object.keys(data[0])[sortIndex];
    data.sort((a, b) => compare(a, b, key, sortDir));
    data = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

    return data;
  };

  const compare = (a, b, key, direction) => {
    let result = 0;
    if (parseInt(a[key])) {
      result = parseInt(a[key]) - parseInt(b[key]);
    } else {
      if (a[key] > b[key]) result = 1;
      else if (a[key] < b[key]) result = -1;
    }
    return direction === "asc" ? result : result * -1;
  };

  const handleCreateStudent = () => {
    setFormOpen(false);
  };

  const filteredData = filterData([...exams]);

  return (
    <Box className={styles.root}>
      <Toolbar />
      <Paper className={styles.content}>
        <TableToolbar
          title={"Kỳ thi"}
          numSelected={selected.length}
          onCreate={() => setFormOpen(true)}
        />
        <Table stickyHeader className={styles.table}>
          <CustomTableHead
            cells={headCells}
            activeIndex={sortIndex}
            numSelected={selected.length}
            rowCount={exams.length}
            sortDirection={sortDir}
            onSelectAll={handleSelectAll}
            onSort={handleSort}
          />
          <TableBody>
            {filteredData.map(exam => (
              <TableRow
                key={exam.id}
                className={styles.row}
                hover
                selected={isChecked(exam.id)}
                onClick={() => handleSelect(exam)}
              >
                <TableCell padding={"checkbox"}>
                  <Checkbox
                    color={"primary"}
                    checked={isChecked(exam.id)}
                    onChange={() => handleSelect(exam)}
                  />
                </TableCell>
                <TableCell>{exam.subject}</TableCell>
                <TableCell>{exam.subjectID}</TableCell>
                <TableCell>{exam.startDate}</TableCell>
                <TableCell>{exam.endDate}</TableCell>
                <TableCell>{exam.noShift}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CustomTablePagination
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPage}
          rowCount={exams.length}
        />
        <CreateStudentDialog
          open={formOpen}
          onClose={() => setFormOpen(false)}
          onAccept={handleCreateStudent}
        />
      </Paper>
    </Box>
  );
};

export default Exam;
