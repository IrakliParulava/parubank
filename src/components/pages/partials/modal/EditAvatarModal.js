import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

function EditAvatarModal({ open, onClose, initialImage, onUpdateAvatar }) {
  const [imageUrl, setImageUrl] = useState(initialImage);

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleUpdateAvatar = () => {
    if (imageUrl.trim() !== '') {
      onUpdateAvatar(imageUrl);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box>
        <DialogTitle>Edit Avatar</DialogTitle>
        <DialogContent>
          <TextField
            label="Image URL"
            fullWidth
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Selected Avatar"
              style={{ maxWidth: '100%', marginTop: '10px' }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              borderColor: '#1D1029',
              color: '#1D1029',
              fontFamily: 'Outfit',
              fontSize: '14px',
              textTransform: 'initial',
              '&:hover': {
                backgroundColor: '#EC1B69',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleUpdateAvatar}
            sx={{
              backgroundColor: '#1D1029',
              color: '#fff',
              fontFamily: 'Outfit',
              fontSize: '14px',
              textTransform: 'initial',
              '&:hover': {
                backgroundColor: '#EC1B69',
              },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default EditAvatarModal;
