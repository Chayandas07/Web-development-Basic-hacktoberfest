import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const helper = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, helper)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        helper
      )}
    </div>
  );
};
export default Modal;
