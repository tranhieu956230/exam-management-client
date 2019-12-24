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
import { useStyles } from "./CreateRoom.css";

const CreateRoom = ({ open, onClose, onAccept }) => {
  const styles = useStyles();
  const [form, setForm] = useState({
    room: "",
    building: "",
    noPc: ""
  });

  const { room, building, noPc } = form;
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
      <DialogTitle>Tạo phòng mới</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Điền thông tin phòng vào form dưới đây
        </DialogContentText>
        <form className={styles.form}>
          <TextField
            autoFocus={true}
            label={"Phòng thi"}
            value={room}
            fullWidth
            onChange={handleFormChange("room")}
            className={styles.text}
          />
          <TextField
            label={"Tòa nhà"}
            value={building}
            fullWidth
            onChange={handleFormChange("building")}
            className={styles.text}
          />
          <TextField
            label={"Số máy"}
            value={noPc}
            fullWidth
            onChange={handleFormChange("noPc")}
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

export default CreateRoom;
