import React, { useState, useEffect } from "react";
import XLSX from "xlsx";

import Search from "components/Search";
import CreateStudentDialog from "components/CreateStudent";

import students from "data/students";
import { clss } from "data/students";
import { isValidExcel } from "helpers";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Paper
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import DownloadIcon from "@material-ui/icons/GetApp";
import { useStyles } from "./Students.css";
import Fuse from "fuse.js";

const options = {
  keys: ["id", "name", "dob", "cls"],
  threshold: 0.1
};

const Students = ({ history }) => {
  const styles = useStyles();
  const [dialog, setDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [excelData, setExcelData] = useState("");

  const handleFileUpload = event => {
    let data = event.target.files[0];
    let reader = new FileReader();
    reader.onload = event => {
      data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheet = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheet];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      if (isValidExcel(jsonData[0], ["MSSV", "Tên", "Ngày sinh", "Lớp"])) {
        setExcelData(jsonData);
        console.log(jsonData);
      }
    };
    reader.readAsArrayBuffer(data);
  };

  const handleAddStudent = () => {
    setDialog(true);
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const fuse = new Fuse(students, options);
  const dataDisplay = searchTerm ? fuse.search(searchTerm) : students;

  return (
    <Box component={"div"} className={styles.root}>
      <Toolbar />
      <CreateStudentDialog open={dialog} onClose={() => setDialog(false)} />
      <Paper className={styles.content}>
        <Toolbar className={styles.toolbar}>
          <Typography variant={"h6"} color={"inherit"} className={styles.title}>
            Sinh viên
          </Typography>
          <Search search={searchTerm} onSearch={handleSearch} />
          <div className={styles.actionMenu}>
            <Tooltip title={"Thêm sinh viên"}>
              <IconButton href={""} onClick={handleAddStudent}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <input
              accept={".xlsx"}
              id={"upload"}
              type={"file"}
              className={styles.upload}
              onChange={handleFileUpload}
            />
            <label htmlFor={"upload"}>
              <IconButton component={"span"} href={""}>
                <DownloadIcon />
              </IconButton>
            </label>
          </div>
        </Toolbar>

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
            {dataDisplay.map(({ id, name, dob, cls }) => (
              <TableRow key={id + dob} className={styles.row}>
                <TableCell>{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{dob}</TableCell>
                <TableCell>{cls}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default Students;
