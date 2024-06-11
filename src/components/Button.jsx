import React from "react";
import styles from "./Button.module.scss";

const Button = ({ onClick }) => (
  <div className={styles.buttonDiv}>
    <button type="button" className={styles.buttonLoad} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default Button;
