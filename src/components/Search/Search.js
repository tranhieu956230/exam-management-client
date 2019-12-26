import React, { useState } from "react";
import { useStyles } from "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import FilterIcon from "@material-ui/icons/FilterList";
import { InputBase, IconButton } from "@material-ui/core";

const Search = ({ search, onSearch, onFilter }) => {
  const styles = useStyles();

  return (
    <div className={styles.search}>
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
      <IconButton className={styles.filter} size={"small"} onClick={onFilter}>
        <FilterIcon />
      </IconButton>
      <InputBase
        placeholder={"Tìm kiếm"}
        value={search}
        onChange={onSearch}
        classes={{
          root: styles.inputRoot,
          input: styles.inputInput,
          focused: styles.inputFocus
        }}
      />
    </div>
  );
};
export default Search;
