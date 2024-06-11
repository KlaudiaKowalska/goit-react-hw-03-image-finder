// Modal.jsx
import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={largeImageURL} alt="Large" />
      </div>
    </div>
  );
};

export default Modal;
