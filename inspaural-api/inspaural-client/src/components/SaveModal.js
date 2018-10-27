import React from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const SaveModal = props => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.openState}
      onClose={props.handleClose}
    >
      <div className="save-modal">
          Name your Inspaural...
          <Button variant="outlined" color="primary" onClick={props.handleClose}>Save</Button>
          <Button variant="outlined" color="secondary" onClick={props.handleClose}>Cancel</Button>
      </div>
    </Modal>
  )
}

export default SaveModal
