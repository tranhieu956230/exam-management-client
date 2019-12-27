import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import { useStyles } from "./StudentDialog.css";
import { clss } from "data/students";

const StudentDialog = ({ open, onClose, onAccept, onFormChange, student }) => {
  const styles = useStyles();
  const { id, dob, cls, name } = student;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Dialog
        className={styles.container}
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth={"xs"}
      >
        <DialogTitle>Tạo mới sinh viên</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Điền thông tin sinh viên vào form dưới đây
          </DialogContentText>
          <form className={styles.form}>
            <TextField
              autoFocus={true}
              label={"Mã sinh viên"}
              value={id}
              fullWidth
              onChange={event => onFormChange("id", event.target.value, event)}
              className={styles.text}
            />
            <TextField
              label={"Họ và tên"}
              value={name}
              fullWidth
              onChange={event =>
                onFormChange("name", event.target.value, event)
              }
              className={styles.text}
            />
            <KeyboardDatePicker
              variant={"inline"}
              label="Ngày sinh"
              format="dd/MM/yyyy"
              value={dob}
              onChange={date => onFormChange("name", date, null)}
              className={styles.text}
            />
            <Autocomplete
              options={clss}
              getOptionLabel={option => option}
              onChange={(event, newValue) =>
                onFormChange("cls", newValue, event)
              }
              value={cls}
              renderInput={params => (
                <TextField {...params} label={"Lớp"} fullWidth />
              )}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button color={"primary"} onClick={onClose} href={""}>
            Hủy
          </Button>
          <Button color={"primary"} autoFocus href={""} onClick={onAccept}>
            Chấp nhận
          </Button>
        </DialogActions>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};

export default StudentDialog;
