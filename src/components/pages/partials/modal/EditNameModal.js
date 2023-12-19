import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

function EditNameModal({ open, onClose, initialName, onUpdateName }) {
  const [newName, setNewName] = useState(initialName);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleUpdateName = () => {
    onUpdateName(newName);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Name</DialogTitle>
      <DialogContent>
        <TextField
          label="New Name"
          variant="outlined"
          fullWidth
          value={newName}
          onChange={handleNameChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleUpdateName}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditNameModal;
