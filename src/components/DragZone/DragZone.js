import React, { useState } from "react";
import { useStyles } from "./DragZone.css";

const DragZone = ({ onDrop }) => {
  const styles = useStyles();
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = ev => {
    ev.preventDefault();
  };

  const handleHighlight = () => {
    setIsDragOver(true);
  };

  const removeHighlight = () => {
    setIsDragOver(false);
  };

  const handleDrop = ev => {
    ev.preventDefault();
    let filesList = [];

    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === "file") {
          filesList.push(ev.dataTransfer.items[i].getAsFile());
        }
      }
    } else {
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        filesList.push(ev.dataTransfer.files[i]);
      }
    }
    onDrop(filesList);
  };

  return (
    <div
      className={`${styles.dragZone} ${
        isDragOver ? styles.dragZoneHighlight : ""
      }`}
      onDrop={ev => {
        handleDrop(ev);
        removeHighlight();
      }}
      onDragOver={handleDragOver}
      onDragEnter={handleHighlight}
      onDragLeave={removeHighlight}
    />
  );
};

export default DragZone;
