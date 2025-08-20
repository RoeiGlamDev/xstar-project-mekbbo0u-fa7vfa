import React from 'react';
import './Modal.css'; // Importing CSS for styling

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Return nothing if modal is not open

  return (
    <div className="modal-overlay"> {/* Overlay for modal */}
      <div className="modal-container"> {/* Modal container */}
        <div className="modal-header"> {/* Header section */}
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>X</button> {/* Close button */}
        </div>
        <div className="modal-body"> {/* Body section */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; // Default export of Modal component