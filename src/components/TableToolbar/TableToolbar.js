import React from "react";
import { IconButton, Toolbar, Tooltip, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ImportIcon from "@material-ui/icons/GetApp";

import Search from "components/Search";

import { useStyles } from "./TableToolbar.css";

const TableToolbar = ({ title }) => {
  const styles = useStyles();
  return (
    <Toolbar className={styles.toolbar}>
      <Typography variant={"h6"} color={"inherit"} className={styles.title}>
        {title}
      </Typography>
      <Search search={""} onSearch={() => {}} />
      <div className={styles.actionMenu}>
        <Tooltip title={"Thêm sinh viên"}>
          <IconButton href={""} onClick={() => {}}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <input
          accept={".xlsx"}
          id={"upload"}
          type={"file"}
          className={styles.upload}
          onChange={() => {}}
        />
        <label htmlFor={"upload"}>
          <IconButton component={"span"} href={""}>
            <ImportIcon />
          </IconButton>
        </label>
      </div>
    </Toolbar>
  );
};

export default TableToolbar;
