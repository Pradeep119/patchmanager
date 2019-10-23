import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { postApi } from '../../config/Api'
import { Combobox } from 'react-widgets'
import "react-widgets/dist/css/react-widgets.css";
import { users } from '../../util/Constants'
import { adduserurl, headers } from '../../config/ApiUrl'
import Modal from 'react-modal';
import PopupModal from '../../containers/PopUpModal/PopUpModal'
import { customStyles } from '../../util/Constants'


class AddUser extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      usertype: '',
      modalIsOpen: false,
      ModalMessage: '',
      ModalTypeError: ''
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChangeText(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  saveData() {
    this.saveUserData()
  }

  async saveUserData() {

    var postbody = {
      "username": this.state.username,
      "password": "",
      "firstName": this.state.firstname,
      "lastName": this.state.lastname,
      "usertype": this.state.usertype
    }

    if (this.validateBody(postbody) === true) {

      if (postbody.usertype === 'admin' || postbody.usertype === 'dev' || postbody.usertype === 'tester') {
        
        var data = await postApi(adduserurl, postbody, headers)
        if (data.status == 200) {
          window.location.reload();
          this.setState({ modalIsOpen: true, ModalTypeError: false, ModalMessage: 'User Added Successfully' });
        }else if (data.status == 500){
          this.setState({ modalIsOpen: true, ModalTypeError: true, ModalMessage: 'User Added Failed' });
	}
      } else {
        this.setState({ modalIsOpen: true, ModalTypeError: true, ModalMessage: 'User Type is incorrect' });
      }

    }

  }

  validateBody(postbody) {
    if (postbody.username === undefined || postbody.username === null || postbody.username === '' || !postbody.username.includes("@")) {
      this.setState({ modalIsOpen: true, ModalTypeError: true, ModalMessage: 'Please Check Username' });
      return false
    }
    //  else if (postbody.password === undefined || postbody.password === null || postbody.password === '') {
    //   this.setState({ modalIsOpen: true, ModalTypeError: true, ModalMessage: 'Please Check Password' });
    //   return false
    // }
    else if (postbody.firstName === undefined || postbody.firstName === null || postbody.firstName === '') {
      this.setState({ modalIsOpen: true, ModalTypeError: true, ModalMessage: 'Please Check FirstName' });
      return false
    } else if (postbody.usertype === undefined || postbody.usertype === null || postbody.usertype === '') {
      this.setState({ modalIsOpen: true, ModalTypeError: true, ModalMessage: 'Please Check Usertype' });
      return false
    } if (postbody.username === undefined || postbody.username === null || postbody.username === '') {
      this.setState({ modalIsOpen: true, ModalTypeError: true, ModalMessage: 'Please Check Username' });
      return false
    } else if (!postbody.username.includes("@apigate.com")) {
      this.setState({ modalIsOpen: true, ModalTypeError: true, ModalMessage: 'This is not an apigate email' });
      return false
    } else {
      return true
    }

  }

  handleUserType = name => value => {
    this.setState({
      [name]: value,
    });
  };


  render() {
    return (
      <div className="main" style={{ width: window.innerWidth / 2, paddingTop: '70px', color: 'black' }}>

        <h2>Add user</h2>
        <Form className="form" style={{ width: window.innerWidth / 2 }}>
          <Col>
            <FormGroup>
              <Label>User Name (Email)</Label>
              <Input
                type="email"
                name="username"
                id="username"
                name="username"
                placeholder="user@apigate.com"
                onChange={this.handleChangeText}
                required={true}
              />
            </FormGroup>
          </Col>
          {/* <Col>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="text"
                name="password"
                id="password"
                name="password"
                onChange={this.handleChangeText}
                required={true}
              // placeholder="********"
              />
            </FormGroup>
          </Col> */}
          <Col>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="firstname"
                id="firstname"
                name="firstname"
                onChange={this.handleChangeText}
                required={true}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="Last Name"
                id="lastname"
                name="lastname"
                onChange={this.handleChangeText}
              // required={true}
              />
            </FormGroup>
          </Col>


          <Col>
            <FormGroup>
              <Label>User Type</Label>
              <Combobox
                data={users}
                name="usertype"
                defaultValue="admin"
                value={this.state.usertype}
                onChange={this.handleUserType('usertype')}
              />
            </FormGroup>

            <FormGroup>
              <Button onClick={() => this.saveData()} >Submit</Button>
            </FormGroup>
          </Col>

        </Form>

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

export default AddUser;
