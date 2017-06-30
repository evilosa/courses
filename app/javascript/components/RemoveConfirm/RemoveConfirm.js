import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RemoveConfirm = ({isOpen, header, question, onRemove, onCancel}) => {
  return (
    <Modal isOpen={isOpen} toggle={onCancel} className={'modal-danger'}>
      <ModalHeader toggle={onCancel}>{header}</ModalHeader>
      <ModalBody>
        {question}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onRemove}>{I18n.t('common.buttons.remove')}</Button>{' '}
        <Button color="secondary" onClick={onCancel}>{I18n.t('common.buttons.cancel')}</Button>
      </ModalFooter>
    </Modal>
  );
};

RemoveConfirm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default RemoveConfirm;