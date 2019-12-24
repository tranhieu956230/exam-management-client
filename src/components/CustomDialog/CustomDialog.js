import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Button,
  Slide
} from "@material-ui/core";

const Transition = React.forwardRef((props, ref) => (
  <Slide direction={"up"} ref={ref} {...props} />
));

const CustomDialog = ({ title, text, open, onClose, onAccept }) => {
  return (
    <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
        <DialogActions>
          <Button color={"primary"} onClick={onAccept}>
            Hủy
          </Button>
          <Button color={"primary"} onClick={onAccept}>
            Chấp nhận
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
