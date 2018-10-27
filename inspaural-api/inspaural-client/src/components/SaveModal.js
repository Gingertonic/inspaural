import React from 'react'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const SaveModal = props => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.openState}
      onClose={props.handleClose}
    >
      <div>
        <Typography variant="h6" id="modal-title">
          Save
        </Typography>
        <Typography variant="subtitle1" id="simple-modal-description">
          Put the name in here
        </Typography>
      </div>
    </Modal>
  )
}

export default SaveModal
