import React from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel
} from "@material-ui/core";
import { useStyles } from "./TableHead.css";

const CustomTableHead = ({
  cells,
  numSelected,
  rowCount,
  activeIndex,
  sortDirection,
  onSelectAll,
  onSort,
  action
}) => {
  const styles = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            color={"primary"}
            onChange={onSelectAll}
          />
        </TableCell>
        {cells.map((label, index) => (
          <TableCell key={index}>
            <TableSortLabel
              active={activeIndex === index}
              direction={sortDirection}
              onClick={() => onSort(index)}
            >
              {label}
            </TableSortLabel>
          </TableCell>
        ))}
        {action ? (
          <TableCell padding={"checkbox"} className={styles.action} />
        ) : null}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
