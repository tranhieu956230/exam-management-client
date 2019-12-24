import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@material-ui/core";
import { useStyles } from "./CreateSubject.css";

const CreateSubject = ({ open, onClose, onAccept }) => {
  const styles = useStyles();
  const [form, setForm] = useState({
    id: "",
    name: "",
    lecturer: "",
    credit: "",
    noParticipants: 0
  });

  const { id, name, lecturer, credit, noParticipants } = form;
  const handleFormChange = key => event => {
    setForm({ ...form, [key]: event.target.value });
  };

  return (
    <Dialog
      className={styles.container}
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={"xs"}
    >
      <DialogTitle>Tạo môn học</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Điền thông tin sinh viên vào form dưới đây
        </DialogContentText>
        <form className={styles.form}>
          <TextField
            autoFocus={true}
            label={"Mã học phần"}
            value={id}
            fullWidth
            onChange={handleFormChange("id")}
            className={styles.text}
          />
          <TextField
            label={"Tên môn học"}
            value={name}
            fullWidth
            onChange={handleFormChange("name")}
            className={styles.text}
          />
          <TextField
            label={"Giảng viên"}
            value={lecturer}
            fullWidth
            onChange={handleFormChange("lecturer")}
            className={styles.text}
          />
          <TextField
            label={"Số tín chỉ"}
            value={credit}
            fullWidth
            onChange={handleFormChange("credit")}
            className={styles.text}
          />
          <TextField
            label={"Số sinh viên"}
            value={noParticipants}
            fullWidth
            onChange={handleFormChange("noParticipants")}
            className={styles.text}
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
  );
};

export default CreateSubject;
