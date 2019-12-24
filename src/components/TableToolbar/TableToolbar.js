import React from "react";
import clsx from "clsx";
import Search from "components/Search";
import { Toolbar, Typography, IconButton, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterIcon from "@material-ui/icons/FilterList";

import { useStyles } from "./TableToolbar.css";

const TableToolbar = ({ title, numSelected }) => {
  const styles = useStyles();

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
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Toolbar>
    );
  };

  const renderNormal = () => (
    <Toolbar className={styles.toolbar}>
      <Typography variant={"h6"} color={"inherit"} className={styles.title}>
        {title}
      </Typography>
      <Search search={""} onSearch={() => {}} />
      <IconButton className={styles.filter}>
        <FilterIcon />
      </IconButton>
    </Toolbar>
  );

  return numSelected > 0 ? renderHighlight() : renderNormal();
};

export default TableToolbar;
