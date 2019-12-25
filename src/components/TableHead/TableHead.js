import React from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel
} from "@material-ui/core";

const CustomTableHead = ({
  cells,
  numSelected,
  rowCount,
  activeIndex,
  sortDirection,
  onSelectAll,
  onSort
}) => {
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
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
