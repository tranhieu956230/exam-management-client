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
  KeyboardDatePicker,
  KeyboardTimePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import { useStyles } from "./ShiftDialog.css";
import { getClass } from "../../apis/student";

let subjects = ["Toán rời rạc", "Xác suất thống kê", "Quản lí dự án phần mềm"];

const StudentDialog = ({ open, onClose, onAccept, onFormChange, shift }) => {
  const styles = useStyles();
  const [clss, setClss] = useState([]);
  const { subject, timeStart, timeEnd, date } = shift;

  useEffect(() => {
    // getClass().then(result => {
    //   setClss([...result.data.class]);
    // });
  }, []);

  const handleAccept = () => {
    // onAccept(id, dob, cls, name);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Dialog
        className={styles.container}
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth={"xs"}
      >
        <DialogTitle>Tạo ca thi</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Điền thông tin ca thi vào form dưới đây
          </DialogContentText>
          <form className={styles.form}>
            <Autocomplete
              options={subjects}
              getOptionLabel={option => option}
              onChange={(event, newValue) =>
                onFormChange("subject", newValue, event)
              }
              value={subject}
              renderInput={params => (
                <TextField {...params} label={"Môn thi"} fullWidth />
              )}
            />
            <KeyboardTimePicker
              label="Thời gian bắt đầu"
              onChange={time => onFormChange("timeStart", time, null)}
              value={timeStart}
              variant={"inline"}
              className={styles.text}
            />
            <KeyboardTimePicker
              label="Thời gian kết thúc"
              value={timeEnd}
              variant={"inline"}
              onChange={time => onFormChange("timeEnd", time, null)}
              className={styles.text}
            />
            <KeyboardDatePicker
              variant={"inline"}
              label="Ngày thi"
              format="dd/MM/yyyy"
              value={date}
              onChange={date => onFormChange("date", date, null)}
              className={styles.text}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button color={"primary"} onClick={onClose} href={""}>
            Hủy
          </Button>
          <Button color={"primary"} autoFocus href={""} onClick={handleAccept}>
            Chấp nhận
          </Button>
        </DialogActions>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};

export default StudentDialog;
