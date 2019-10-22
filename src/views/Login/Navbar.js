import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.css';


import Home from '../Home/Home'
import { black } from 'ansi-colors';

function UserAvatar(props) {
  // If a user avatar is available, return an img tag with the pic
  if (props.user.avatar) {
    return <img
      src={props.user.avatar} alt="user"
      className="rounded-circle align-self-center mr-2"
      style={{ width: '32px' }}></img>;
  }

  // No avatar available, return a default icon
  return <i
    className="far fa-user-circle fa-lg rounded-circle align-self-center mr-2"
    style={{ width: '32px' }}></i>;
}

function AuthNavItem(props) {
  // If authenticated, return a dropdown with the user's info and a
  // sign out button
  if (props.isAuthenticated) {
    return (
      <UncontrolledDropdown>
        <DropdownToggle nav caret>
          <UserAvatar user={props.user} />
        </DropdownToggle>
        <DropdownMenu right>
          <h5 className="dropdown-item-text mb-0">{props.user.displayName}</h5>
          <p className="dropdown-item-text text-muted mb-0">{props.user.email}</p>
          <DropdownItem divider />
          <DropdownItem onClick={props.authButtonMethod}>Sign Out</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  // Not authenticated, return a sign in link
  return (
    <NavItem>
      <NavLink onClick={props.authButtonMethod}>Sign In</NavLink>
    </NavItem>
  );
}

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    // Only show calendar nav item if logged in
    let calendarLink = null;
    if (this.props.isAuthenticated) {
      calendarLink = (
        <NavItem>
          <RouterNavLink to="/calendar" className="nav-link" exact>Calendar</RouterNavLink>
        </NavItem>
      );
    }

    return (
      <div >
        <Navbar color="dark" dark expand="md" fixed="top">
          <Container>
            <NavbarBrand href="/"></NavbarBrand>   {/* <NavbarBrand href="/">Home</NavbarBrand> */}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>

                <NavItem>
                  <RouterNavLink to="/patch-manager" className="nav-link" exact>{this.props.patch_manager}</RouterNavLink>
                </NavItem>
                {Home}
                <NavItem>
                  <RouterNavLink to="/products" className="nav-link" exact>{this.props.products}</RouterNavLink>
                </NavItem>
                <NavItem>
                  <RouterNavLink to="/patch-history" className="nav-link" exact>{this.props.patch_history}</RouterNavLink>
                </NavItem>
                <NavItem>
                  <RouterNavLink to="/add-user" className="nav-link" exact>{this.props.user_create}</RouterNavLink>
                </NavItem>
                <NavItem>
                  <RouterNavLink to="/patch-approver" className="nav-link" exact>{this.props.patch_approver}</RouterNavLink>
                </NavItem>

              </Nav>



              <Nav className="justify-content-end" navbar>
                
                <AuthNavItem
                  isAuthenticated={this.props.isAuthenticated}
                  authButtonMethod={this.props.authButtonMethod}
                  user={this.props.user} />
              </Nav>

            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}