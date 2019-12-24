import React, { useEffect } from "react";
import { TablePagination } from "@material-ui/core";

import { useStyles } from "./TablePagination.css";

const CustomTablePagination = ({
  rowCount,
  rowsPerPage,
  page,
  onChangePage,
  onChangeRowsPerPage
}) => {
  const styles = useStyles();
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={rowCount}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
    />
  );
};

export default CustomTablePagination;
