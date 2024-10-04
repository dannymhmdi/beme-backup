import React from "react";
import styles from "./loadingStyle.module.css";
const Loading2 = () => {
  return (
    <div class={`${styles["spinner"]}`}>
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
