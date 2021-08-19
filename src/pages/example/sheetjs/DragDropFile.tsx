import React, { Component, FC } from "react";
import styles from "./index.scss";

/*
  Simple HTML5 file drag-and-drop wrapper
  usage: <DragDropFile handleFile={handleFile}>...</DragDropFile>
    handleFile(file:File):void;
*/

const DragDropFile: FC<{ handleFile: (file: File) => void }> = ({
  handleFile,
  children,
}) => {
  const suppress = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
  };

  const onDrop = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    const files = evt.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  return (
    <div
      className={styles["drop-content"]}
      onDrop={onDrop}
      onDragEnter={suppress}
      onDragOver={suppress}
    >
      {children}
    </div>
  );
};

export default DragDropFile;
