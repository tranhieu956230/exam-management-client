import React, { useState } from "react";
import { useStyles } from "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import FilterIcon from "@material-ui/icons/FilterList";
import {
  InputBase,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Dialog
} from "@material-ui/core";

const Search = ({ search, onSearch }) => {
  const styles = useStyles();
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  const handleAcceptFilter = () => {
    setFilterOpen(false);
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
      <IconButton
        className={styles.filter}
        size={"small"}
        onClick={() => setFilterOpen(true)}
      >
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
    </div>
  );
};
export default Search;
