import React from 'react';
import './styles.css';
import { MDBIcon } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default class PopUpModal extends React.Component {
  render() {
    return (
      <div>
        <div className='MainDiv'>
          <div className='HeaderDiv'>
            <div>

              {this.props.ModalTypeError ? (
                <h3 className="MessageTitleError">Error</h3>
              ) : (
                  <h3 className="MessageTitleSuccess">Success</h3>
                )}

            </div>
            <div className="CloseIcon">
              <MDBIcon onClick={this.props.closeModal} far icon="times-circle" size={20}/>
            </div>
          </div>

          {this.props.ModalTypeError ? (
            <p className='MessageContentError'>{this.props.ModalMessage}</p>
          ) : (
              <p className='MessageContentSuccess'>{this.props.ModalMessage}</p>
            )}

          <div className='CloseButton'>
            <button onClick={this.props.closeModal}>close</button>
          </div>

        </div>
      </div>
    );
  }
}































