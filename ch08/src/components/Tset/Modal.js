import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom"
import styles from "./Modal.module.css";

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />;
  };

  const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <button onClick={props.onConfirm}>Okay</button>
          </footer>
        </div>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}></Backdrop>, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}></ModalOverlay>, document.getElementById("modal-root"))}
    </Fragment>
  )
}
export default Modal;
