import React from "react";
import { useStyles } from "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";

const Search = ({ search, onSearch }) => {
  const styles = useStyles();
  return (
    <div className={styles.search}>
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
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
