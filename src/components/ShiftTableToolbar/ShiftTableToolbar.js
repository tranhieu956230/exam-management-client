import React, { useState } from "react";
import clsx from "clsx";
import Search from "components/Search";
import CustomDialog from "components/CustomDialog";
import FilterPopover from "components/FilterPopover";
import { Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Done";

import { useStyles } from "./ShiftTableToolbar.css";

const TableToolbar = ({ title, numSelected, onCreate, onImport, std }) => {
  const styles = useStyles();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [checkbox, setCheckbox] = useState({
    id: false,
    name: true,
    dob: false,
    cls: false
  });

  const fields = [
    ["id", "Mã số sinh viên"],
    ["name", "Họ và tên"],
    ["dob", "Ngày sinh"],
    ["cls", "Lớp"]
  ];

  const handleCloseDialog = () => {
    setDeleteOpen(false);
  };

  const handleAcceptDialog = () => {
    setDeleteOpen(false);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleOpenFilter = ev => {
    setAnchorEl(ev.currentTarget);
  };

  const handleCheckbox = field => event => {
    setCheckbox({ ...checkbox, [field]: event.target.checked });
  };

  const renderHighlight = () => {
    return (
      <Toolbar className={clsx(styles.toolbar, styles.highlight)}>
        <Typography
          variant={"subtitle1"}
          color="inherit"
          className={styles.title}
        >
          {numSelected} đã chọn
        </Typography>

        {std ? (
          <IconButton>
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setDeleteOpen(true)}>
            <DeleteIcon />
          </IconButton>
        )}
      </Toolbar>
    );
  };

  const renderNormal = () => (
    <Toolbar className={styles.toolbar}>
      <Typography variant={"h6"} color={"inherit"} className={styles.title}>
        {title}
      </Typography>
      <Search search={""} onSearch={() => {}} onFilter={handleOpenFilter} />
      <Button
        variant={"outlined"}
        color={"primary"}
        className={styles.button}
        onClick={onCreate}
      >
        Tạo mới
      </Button>
      <input type="file" id="studentExcel" className={styles.uploadInput} />
      <label htmlFor={"studentExcel"}>
        <Button
          onClick={onImport}
          variant={"outlined"}
          className={`${styles.button} ${styles.buttonImport}`}
          component={"span"}
        >
          Import
        </Button>
      </label>
    </Toolbar>
  );

  return (
    <React.Fragment>
      {numSelected > 0 ? renderHighlight() : renderNormal()}
    </React.Fragment>
  );
};

export default TableToolbar;
