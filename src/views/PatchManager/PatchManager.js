import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { textAlign } from '@material-ui/system';
import Icon from '@material-ui/core/Icon';
import './styles.css';
import { MDBIcon } from 'mdbreact';

import '@fortawesome/fontawesome-free/css/all.min.css';

import PopupModal from '../../containers/PopUpModal/PopUpModal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class PatchManager extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }



  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="overlay"
        >

          <PopupModal
            closeModal={this.closeModal}
            ModalMessage="im in a body . ashiubf salfkjasbdljs asdl dsf dsf sd ffsg df hhdgdfg f gd"
          />

        </Modal>
      </div>
    );
  }
}

// ReactDOM.render(<PatchManager />, PatchManager);






























