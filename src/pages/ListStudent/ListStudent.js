import React, { useState } from "react";
import TableToolbar from "components/TableToolbar";
import CustomTableHead from "components/TableHead";
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
  const headCells = ["Mã số sinh viên", "Họ và tên", "Ngày sinh", "Lớp"];

  const sortData = () => {};

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

  return (
    <Paper className={styles.content}>
      <TableToolbar
        title={"Sinh viên"}
        numSelected={selected.length}
        rowCount={students.length}
      />
      <Table>
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
          {students.map(student => (
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
    </Paper>
  );
};

export default ListStudent;
