import React from "react";
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalClassName = isOpen ? "modal modal--open" : "modal";

  return (
    <div className={modalClassName}>
      <div className="modal-content">
        <div className="modal-close" onClick={onClose}></div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
