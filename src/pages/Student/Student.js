import React, { useState, useEffect } from "react";
import clsx from "clsx";
import TableToolbar from "components/StudentTableToolbar";
import CustomTableHead from "components/TableHead";
import CustomTablePagination from "components/TablePagination";
import StudentDialog from "components/StudentDialog";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  Checkbox,
  TableRow,
  Box,
  Toolbar,
  IconButton
} from "@material-ui/core";
import studentAPI from "apis/student";

import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import { useStyles } from "./Student.css";
import { pad0 } from "../../helpers";
import XLSX from "xlsx";

const Student = () => {
  const styles = useStyles();
  const [sortIndex, setSortIndex] = useState(0);
  const [students, setStudents] = useState([]);
  const [sortDir, setSortDir] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [createFormOpen, setCreateFormOpen] = useState(false);
  const [createStudent, setCreateStudent] = useState({
    dob: null,
    name: "",
    cls: "",
    id: ""
  });
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [editStudent, setEditStudent] = useState({
    dob: null,
    name: "",
    cls: "",
    id: ""
  });

  const headCells = ["Mã số sinh viên", "Họ và tên", "Ngày sinh", "Lớp"];

  useEffect(() => {
    studentAPI.getStudent(page, rowsPerPage).then(result => {
      setStudents(
        result.data.students.map(student => {
          student.dob = new Date(Date.parse(student.dob));
          return student;
        })
      );
    });
  }, []);

  const handleSelectAll = () => {
    if (students.length === selected.length) setSelected([]);
    else setSelected([...students]);
  };

  const handleEditForm = (event, student) => {
    event.stopPropagation();
    setEditStudent({ ...student });
    setEditFormOpen(true);
  };

  const handleEditStudent = () => {
    const { id, name, dob, cls } = editStudent;
    studentAPI.editStudent(id, name, dob, cls);

    setStudents(
      students.map(student =>
        student.id === id ? { ...student, ...editStudent } : student
      )
    );
    setEditFormOpen(false);
  };

  // const handleDelete = () => {
  //   studentAPI.deleteStudent()
  // }

  const handleEditFormChange = (field, value, event) => {
    setEditStudent({ ...editStudent, [field]: value });
  };

  const handleCreateForm = event => {
    event.stopPropagation();
    setCreateFormOpen(true);
  };

  const parseTime = dob => {
    if (Boolean(dob)) {
      const year = pad0(dob.getFullYear());
      const month = pad0(dob.getMonth());
      const date = pad0(dob.getDate());
      return `${year}-${month}-${date}`;
    }
    return "";
  };

  const handleCreateStudent = () => {
    studentAPI.createStudent(
      createStudent.id,
      createStudent.name,
      createStudent.dob,
      createStudent.cls
    );
    setStudents([...students, createStudent]);
    setCreateFormOpen(false);
  };

  const handleCreateFormChange = (field, value, event) => {
    setCreateStudent({ ...createStudent, [field]: value });
  };

  const handleImport = event => {
    if (event.target.files) {
      let data = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheet = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheet];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        for (let student of jsonData) {
          student.dob = new Date(student.dob);
        }
        setStudents([...students, ...jsonData]);
        studentAPI.createManyStudent(jsonData);
      };
      reader.readAsArrayBuffer(data);
    }
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

  const filteredData = students ? filterData(students) : [];
  console.log(filteredData);

  return (
    <Box className={styles.root}>
      <Toolbar />
      <Paper className={styles.content}>
        <TableToolbar
          title={"Sinh viên"}
          numSelected={selected.length}
          onCreate={handleCreateForm}
          onImport={handleImport}
        />
        <Table stickyHeader className={styles.table}>
          <CustomTableHead
            cells={headCells}
            activeIndex={sortIndex}
            numSelected={selected.length}
            rowCount={students.length}
            sortDirection={sortDir}
            onSelectAll={handleSelectAll}
            onSort={handleSort}
            action={true}
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
                <TableCell>{parseTime(student.dob)}</TableCell>
                <TableCell>{student.cls}</TableCell>
                <TableCell className={styles.action}>
                  <IconButton
                    onClick={ev => handleEditForm(ev, student)}
                    className={clsx(styles.actionButton, styles.actionHidden)}
                  >
                    <EditIcon fontSize={"small"} />
                  </IconButton>
                </TableCell>
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
        <StudentDialog
          open={createFormOpen}
          onClose={() => setCreateFormOpen(false)}
          onAccept={handleCreateStudent}
          onFormChange={handleCreateFormChange}
          student={createStudent}
        />
        <StudentDialog
          open={editFormOpen}
          onClose={() => setEditFormOpen(false)}
          onAccept={handleEditStudent}
          onFormChange={handleEditFormChange}
          student={editStudent}
        />
      </Paper>
    </Box>
  );
};

export default Student;
