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

import TableToolbar from "components/TableToolbar";
import CustomTableHead from "components/TableHead";
import CustomTablePagination from "components/TablePagination";
import CreateRoom from "components/CreateRoom";

import { useStyles } from "./Room.css";
import { rooms } from "data";

const Room = () => {
  const styles = useStyles();
  const [sortIndex, setSortIndex] = useState(0);
  const [sortDir, setSortDir] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [formOpen, setFormOpen] = useState(false);

  const headCells = ["Phòng", "Toà nhà", "Số máy", "Tình trạng"];

  const handleSelectAll = () => {
    if (rooms.length === selected.length) setSelected([]);
    else setSelected([...rooms]);
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

  const filteredData = filterData([...rooms]);

  return (
    <Box className={styles.root}>
      <Toolbar />
      <Paper className={styles.content}>
        <TableToolbar
          title={"Phòng thi"}
          numSelected={selected.length}
          onCreate={() => setFormOpen(true)}
        />
        <Table stickyHeader className={styles.table}>
          <CustomTableHead
            cells={headCells}
            activeIndex={sortIndex}
            numSelected={selected.length}
            rowCount={rooms.length}
            sortDirection={sortDir}
            onSelectAll={handleSelectAll}
            onSort={handleSort}
          />
          <TableBody>
            {filteredData.map(room => (
              <TableRow
                key={room.id}
                className={styles.row}
                hover
                selected={isChecked(room.id)}
                onClick={() => handleSelect(room)}
              >
                <TableCell padding={"checkbox"}>
                  <Checkbox
                    color={"primary"}
                    checked={isChecked(room.id)}
                    onChange={() => handleSelect(room)}
                  />
                </TableCell>
                <TableCell>{room.room}</TableCell>
                <TableCell>{room.building}</TableCell>
                <TableCell>{room.noPc}</TableCell>
                <TableCell>{room.condition}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CustomTablePagination
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPage}
          rowCount={rooms.length}
        />
        <CreateRoom
          open={formOpen}
          onClose={() => setFormOpen(false)}
          onAccept={handleCreateSubject}
        />
      </Paper>
    </Box>
  );
};

export default Room;
