import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  Checkbox,
  Paper,
  Toolbar,
  Box
} from "@material-ui/core";

import TableToolbar from "components/StudentTableToolbar";
import CustomTableHead from "components/TableHead";
import CustomTablePagination from "components/TablePagination";
import CreateSubject from "components/CreateSubject";

import { useStyles } from "./Subjects.css";
import { subjects } from "data";

const Subjects = () => {
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
    "Giảng viên",
    "Số tín chỉ",
    "Số sinh viên"
  ];

  const handleSelectAll = () => {
    if (subjects.length === selected.length) setSelected([]);
    else setSelected([...subjects]);
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

  const handleCreateSubject = () => {
    setFormOpen(false);
  };

  const filteredData = filterData([...subjects]);

  return (
    <Box className={styles.root}>
      <Toolbar />
      <Paper className={styles.content}>
        <TableToolbar
          title={"Môn học"}
          numSelected={selected.length}
          onCreate={() => setFormOpen(true)}
        />
        <Table stickyHeader className={styles.table}>
          <CustomTableHead
            cells={headCells}
            activeIndex={sortIndex}
            numSelected={selected.length}
            rowCount={subjects.length}
            sortDirection={sortDir}
            onSelectAll={handleSelectAll}
            onSort={handleSort}
          />
          <TableBody>
            {filteredData.map(subject => (
              <TableRow
                key={subject.id}
                className={styles.row}
                hover
                selected={isChecked(subject.id)}
                onClick={() => handleSelect(subject)}
              >
                <TableCell padding={"checkbox"}>
                  <Checkbox
                    color={"primary"}
                    checked={isChecked(subject.id)}
                    onChange={() => handleSelect(subject)}
                  />
                </TableCell>
                <TableCell>{subject.id}</TableCell>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.lecturer}</TableCell>
                <TableCell>{subject.credit}</TableCell>
                <TableCell>{subject.noParticipants}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CustomTablePagination
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPage}
          rowCount={subjects.length}
        />
        <CreateSubject
          open={formOpen}
          onClose={() => setFormOpen(false)}
          onAccept={handleCreateSubject}
        />
      </Paper>
    </Box>
  );
};

export default Subjects;
