import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/model.module.css";
const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.StyledModalOverlay}>
      <div className={styles.StyledModal}>
        <div className={styles.StyledModalHeader}>
          <span onClick={handleCloseClick} className={styles.closebtn}>
            close
          </span>
        </div>
        <div className={styles.StyledModalBody}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
