import React, { useState } from "react";
import Search from "components/Search";
import CustomDialog from "components/CustomDialog";
import clsx from "clsx";
import {
  Toolbar,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterIcon from "@material-ui/icons/FilterList";

import { useStyles } from "./TableToolbar.css";

const TableToolbar = ({ title, numSelected }) => {
  const styles = useStyles();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleCloseDialog = () => {
    setDeleteOpen(false);
  };

  const handleAcceptDialog = () => {
    setDeleteOpen(false);
  };

  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  const handleAcceptFilter = () => {
    setFilterOpen(false);
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
        <IconButton onClick={() => setDeleteOpen(true)}>
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
      <IconButton className={styles.filter} onClick={() => setFilterOpen(true)}>
        <FilterIcon />
      </IconButton>
    </Toolbar>
  );

  return (
    <React.Fragment>
      {numSelected > 0 ? renderHighlight() : renderNormal()}
      <CustomDialog
        open={deleteOpen}
        onAccept={handleAcceptDialog}
        onClose={handleCloseDialog}
        title={"Xác nhận xóa"}
        text={`Xóa ${numSelected} sinh viên khỏi hệ thống? Hành động này sẽ xóa toàn bộ ca thi mà sinh viên đã đăng kí.`}
      />
      <Dialog open={filterOpen} onClose={handleFilterClose}>
        <DialogTitle>Áp dụng bộ lọc</DialogTitle>
        <DialogContent>
          <DialogActions>
            <Button color={"primary"} onClick={handleFilterClose}>
              Hủy
            </Button>
            <Button color={"primary"} onClick={handleAcceptFilter}>
              Chấp nhận
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default TableToolbar;
