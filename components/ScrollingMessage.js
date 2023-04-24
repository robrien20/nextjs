import React from "react";
import styles from "../styles/ScrollingMessage.module.css";

const ScrollingMessage = ({ text }) => {
  return (
    <div className={styles.messageContainer}>
      <span className={styles.message}>{text}</span>
    </div>
  );
};

export default ScrollingMessage;
