import React, { useState } from "react";
import DragZone from "components/DragZone";

import { useStyles } from "./ImportFromExcel.css";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import FileIcon from "@material-ui/icons/FileCopy";
import DeleteIcon from "@material-ui/icons/Delete";

const ImportStudentExcel = () => {
  const styles = useStyles();
  const [files, setFiles] = useState([]);

  const handleDrop = uploadedFiles => {
    setFiles([...uploadedFiles, ...files]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <DragZone onDrop={handleDrop} />
        <div className={styles.importList}>
          <Typography variant={"h6"} color={"inherit"}>
            Danh sách file đã import
          </Typography>
          <List component={"ul"}>
            {files.map(file => (
              <ListItem component={"li"} button>
                <ListItemIcon>
                  <FileIcon />
                </ListItemIcon>
                <ListItemText primary={file.name} />
                <ListItemSecondaryAction>
                  <IconButton edge={"end"}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.reviewImport}></div>
      </div>
    </div>
  );
};

export default ImportStudentExcel;
