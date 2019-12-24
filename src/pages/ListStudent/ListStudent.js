import React, { useState, useEffect } from "react";
import TableToolbar from "components/TableToolbar";
import CustomTableHead from "components/TableHead";
import CustomTablePagination from "components/TablePagination";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  Checkbox,
  TableRow
} from "@material-ui/core";

import { useStyles } from "./ListStudent.css";

const ListStudent = ({ students }) => {
  const styles = useStyles();
  const [sortIndex, setSortIndex] = useState(0);
  const [sortDir, setSortDir] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const headCells = ["Mã số sinh viên", "Họ và tên", "Ngày sinh", "Lớp"];

  const handleSelectAll = () => {
    if (students.length === selected.length) setSelected([]);
    else setSelected([...students]);
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

  function compare(a, b, key, direction) {
    let result = 0;
    if (parseInt(a[key])) {
      result = parseInt(a[key]) - parseInt(b[key]);
    } else {
      if (a[key] > b[key]) result = 1;
      else if (a[key] < b[key]) result = -1;
    }
    return direction === "asc" ? result : result * -1;
  }

  const filteredData = filterData([...students]);

  return (
    <Paper className={styles.content}>
      <TableToolbar title={"Sinh viên"} numSelected={selected.length} />
      <Table stickyHeader className={styles.table}>
        <CustomTableHead
          cells={headCells}
          activeIndex={sortIndex}
          numSelected={selected.length}
          rowCount={students.length}
          sortDirection={sortDir}
          onSelectAll={handleSelectAll}
          onSort={handleSort}
        />
        <TableBody>
          {filteredData.map(student => (
            <TableRow
              key={student.id}
              className={styles.row}
              hover
              selected={isChecked(student.id)}
              onClick={() => handleSelect(student)}
            >
              <TableCell padding={"checkbox"}>
                <Checkbox
                  color={"primary"}
                  checked={isChecked(student.id)}
                  onChange={() => handleSelect(student)}
                />
              </TableCell>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.dob}</TableCell>
              <TableCell>{student.cls}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomTablePagination
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleRowsPerPage}
        rowCount={students.length}
      />
    </Paper>
  );
};

export default ListStudent;
