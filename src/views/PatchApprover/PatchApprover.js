import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './styles.css';
import DataTable from 'react-data-table-component';
import { getApi } from '../../config/Api'
import { Combobox } from 'react-widgets'
import 'bootstrap/dist/css/bootstrap.css';
import { patchcoloumn, approvetypedata, customStyles } from '../../util/Constants'
import { pending_patch_url, pending_patchid_url, headers, pending_update_url } from '../../config/ApiUrl'
import Modal from 'react-modal';
import PopupModal from '../../containers/PopUpModal/PopUpModal'

export default class PatchApprover extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataarray: 0,
      usertype: '',
      patchIdArray: 0,
      comboSelectedVal: '',
      approvetype: '',
      modalIsOpen: false,
      ModalMessage: '',
      ModalTypeError: ''
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

  async getAllPatches() {
    this.setState({
      dataarray: await getApi(pending_patch_url, headers)
    })
  }

  async getPendingPatcheIds() {
    this.setState({
      patchIdArray: await getApi(pending_patchid_url, headers)
    })
  }

  componentDidMount() {
    this.getAllPatches()
    this.getPendingPatcheIds()
  }

  handlePatchSelect = name => value => {
    this.setState({
      [name]: value,
    });
  };

  saveData() {
    this.saveUserData()
  }

  async saveUserData() {
    var putbody = {
      "patch_id": this.state.comboSelectedVal,
      "status": this.state.approvetype
    }

    var url = pending_update_url + '/' + putbody.patch_id + '/' + putbody.status
    var data = await getApi(url, headers)

    if (data === 'Success') {
      var PopupMessage = ''
      if (putbody.status === 'approved') {
        PopupMessage = putbody.patch_id + ' Approved Succesfully'
        this.setState({ modalIsOpen: true, ModalTypeError: false, ModalMessage: PopupMessage });
      } else if (putbody.status === 'rejected') {
        PopupMessage = putbody.patch_id + ' Rejected Succesfully'
        this.setState({ modalIsOpen: true, ModalTypeError: false, ModalMessage: PopupMessage });
      }else{
        this.setState({ modalIsOpen: true, ModalTypeError: true, ModalMessage: 'Check Your Values' });
      }
      this.getAllPatches()
    } else {
      this.getAllPatches()
      this.setState({ modalIsOpen: true, ModalTypeError: true, ModalMessage: 'Operation Failed' });
    }

  }

  render() {

    return (
      <div className="App">

        <div className='ComboBoxDiv'>

          <div style={{display:'flex', flexDirection:'row'}}>
            <h4 className='HeadingLabel'>Patch Id &nbsp;&nbsp;&nbsp;&nbsp;</h4>
            <Combobox
              data={this.state.patchIdArray}
              name="comboSelectedVal"
              onChange={this.handlePatchSelect('comboSelectedVal')}
            />
          </div>

          <div style={{display:'flex', flexDirection:'row'}}>
            <h4 className='HeadingLabel'>Status &nbsp;&nbsp;&nbsp;&nbsp;</h4>
            <Combobox
              data={approvetypedata}
              name="approvetype"
              defaultValue="approved"
              value={this.state.approvetype}
              onChange={this.handlePatchSelect('approvetype')}
            />
          </div>

          <div className='SubmitbtnDiv'  >
            <Button onClick={() => this.saveData()} style={{ width: window.innerWidth / 5 }} >Submit</Button>
          </div> 

        </div>


        <DataTable
          columns={patchcoloumn}
          data={this.state.dataarray}
          paginationRowsPerPageOptions={20}
          paginationPerPage={20}
        />

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
            ModalMessage={this.state.ModalMessage}
            ModalTypeError={this.state.ModalTypeError}
          />
        </Modal>


      </div>

    );
  }
}





