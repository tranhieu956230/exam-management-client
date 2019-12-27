import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Popover,
  Typography
} from "@material-ui/core";

import { useStyles } from "./FilterPopover.css";

const FilterPopover = ({
  anchorEl,
  onFilterClose,
  fields,
  checkbox,
  onCheckboxChange
}) => {
  const styles = useStyles();

  return (
    <Popover
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={onFilterClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      classes={{ paper: styles.popover }}
    >
      <Typography
        variant={"subtitle1"}
        color={"inherit"}
        className={styles.heading}
      >
        Áp dụng bộ lọc
      </Typography>
      <FormGroup className={styles.formGroup}>
        {fields.map(([field, label], index) => (
          <FormControlLabel
            key={index}
            className={styles.formItem}
            control={
              <Checkbox
                checked={checkbox[field]}
                onChange={onCheckboxChange(field)}
                color={"primary"}
              />
            }
            label={label}
          />
        ))}
      </FormGroup>
    </Popover>
  );
};

export default FilterPopover;
