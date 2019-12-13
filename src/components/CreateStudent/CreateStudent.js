import React, { useState } from "react";
import { useStyles } from "./CreateStudent.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import { clss } from "../../data/students";

const CreateStudentDialog = ({ open, onClose }) => {
  const styles = useStyles();
  const [form, setForm] = useState({
    dob: new Date(),
    name: "",
    id: "",
    cls: ""
  });

  const { id, dob, cls, name } = form;
  const handleFormChange = key => event => {
    setForm({ ...form, [key]: event.target.value });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={"sm"}>
        <DialogTitle>Tạo sinh viên</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nhập thông sinh viên vào form dưới đây
          </DialogContentText>
          <form className={styles.form}>
            <TextField
              autoFocus={true}
              label={"Mã sinh viên"}
              value={id}
              fullWidth
              onChange={handleFormChange("id")}
              className={styles.text}
            />
            <TextField
              label={"Họ và tên"}
              value={name}
              fullWidth
              onChange={handleFormChange("name")}
              className={styles.text}
            />
            <KeyboardDatePicker
              variant={"inline"}
              label="Ngày sinh"
              format="dd/MM/yyyy"
              value={dob}
              onChange={date => setForm({ ...form, dob: date })}
              className={styles.text}
            />
            <Autocomplete
              options={clss}
              getOptionLabel={option => option}
              onChange={(event, newValue) =>
                setForm({ ...form, cls: newValue })
              }
              value={cls}
              renderInput={params => (
                <TextField {...params} label={"Lớp"} fullWidth />
              )}
            />
          </form>
        </DialogContent>
        <DialogActions className={styles.action}>
          <Button color={"primary"} onClick={onClose} href={""}>
            Hủy
          </Button>
          <Button color={"primary"} onClick={onClose} autoFocus href={""}>
            Chấp nhận
          </Button>
        </DialogActions>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};

export default CreateStudentDialog;
