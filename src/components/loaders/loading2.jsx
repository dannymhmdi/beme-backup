import React from "react";
import styles from "./loadingStyle.module.css";
const Loading2 = () => {
  return (
    <div className={`${styles["spinner"]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading2;
