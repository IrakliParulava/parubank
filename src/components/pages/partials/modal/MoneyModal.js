// MoneyModal.js

import React, { useState } from 'react';
import Modal from 'your-modal-library'; // Replace with your modal library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using FontAwesome for icons
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Replace with the appropriate check icon from FontAwesome

const MoneyModal = ({ isOpen, onClose }) => {
  const [isTransactionSuccessful, setTransactionSuccessful] = useState(false);

  // Function to handle the close of the modal
  const handleClose = () => {
    setTransactionSuccessful(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
            {isTransactionSuccessful ? 'Transaction Successful!' : 'Sending Money...'}
          </h5>
          <button type="button" className="close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {/* Add your icon here if needed */}
          {isTransactionSuccessful ? (
            <p>Your money has been successfully sent.</p>
          ) : (
            <p>Processing your transaction...</p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default MoneyModal;
