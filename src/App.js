import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavBar from './Navbar'
import ErrorMessage from './ErrorMessage';
import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.css';

import config from './Config';
import { UserAgentApplication } from 'msal';

import { getUserDetails } from './GraphService';



import Home from './views/Home/Home'
import PatchManager from './views/PatchManager/PatchManager'
import PatchHistory from './views/PatchHistory/PatchHistory'
import Products from './views/Products/Products'
import AddUser from './views/AddUser/AddUser'
import axios from 'axios'
import { postApi, getApi } from './views/Api/Api'

class App extends Component {

  constructor(props) {
    super(props);

    this.userAgentApplication = new UserAgentApplication({
      auth: {
        clientId: config.appId
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true

      }
    });


    
    var user = this.userAgentApplication.getAccount();

    this.state = {
      isAuthenticated: (user !== null),
      user: {},
      error: null,
      logintoken: '',

      microsoftUserObject: this.userAgentApplication,
      microsoft_user_useremail: '',
      db_user_useremail: '',
      db_user_usertype: ''
    };

    if (user) {
      // Enhance user object with data from Graph
      this.getUserProfile();
    }



  }


  logout() {
    this.userAgentApplication.logout();
  }



  async login() {
    try {
      await this.userAgentApplication.loginPopup(
        {
          scopes: config.scopes,
          prompt: "select_account"
        });
      await this.getUserProfile();
    }
    catch (err) {
      var errParts = err.split('|');
      this.setState({
        isAuthenticated: false,
        user: {},
        error: { message: errParts[1], debug: errParts[0] }
      });
    }
  }


  async getUserProfile() {
    try {
      // Get the access token silently
      // If the cache contains a non-expired token, this function
      // will just return the cached token. Otherwise, it will
      // make a request to the Azure OAuth endpoint to get a token

      var accessToken = await this.userAgentApplication.acquireTokenSilent({
        scopes: config.scopes
      });

      if (accessToken) {
        // Get the user's profile from Graph
        var user = await getUserDetails(accessToken);
        this.setState({
          isAuthenticated: true,
          user: {
            displayName: user.displayName,
            email: user.mail || user.userPrincipalName
          },
          error: null
        });




        // add by pradeep
        // this.getLoginToken()
        this.setState({
          microsoft_user_useremail: this.userAgentApplication.account.userName
        })
        var usertypeval = this.userAgentApplication.account.userName

        this.getUserTypeFromDb(usertypeval)

      }
    }
    catch (err) {
      var error = {};
      if (typeof (err) === 'string') {
        var errParts = err.split('|');
        error = errParts.length > 1 ?
          { message: errParts[1], debug: errParts[0] } :
          { message: err };
      } else {
        error = {
          message: err.message,
          debug: JSON.stringify(err)
        };
      }

      this.setState({
        isAuthenticated: false,
        user: {},
        error: error
      });
    }
  }

  componentDidMount() {
    // this.getToken()

  }

  componentWillMount(){
    this.getLoginToken()
  }

  async getLoginToken() {
    var url = 'http://localhost:8080/token/generate-token'
    var headers = { 'Content-Type': 'application/json' }
    var postbody = {
      "username": "alex@apigate.com",
      "password": "alex123"
    }


    var data = await postApi(url, postbody, headers)

    var Bearer = 'Bearer ' + data.result.token
    localStorage.setItem('token', Bearer)

    console.log("myyyyyyyyyyy login token ",Bearer)
    this.setState({
      logintoken: data.result.token,
    })
  }

  async getUserTypeFromDb(usertype) {

    var url = 'http://localhost:8080/users/me/' + usertype
    console.log("urlllllllll ", url)
    var headers = { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') }
    var data = await getApi(url, headers)
    localStorage.setItem('usertype', data.result.token)
    console.log("userrrrrrrrrrrrrrr type ", data)
    this.setState({
      db_user_usertype: data.result.usertype,
      db_user_useremail: data.result.username
    })

  }

  render() {

    var dbUserType = this.state.db_user_usertype
    var dbUserEmail = this.state.db_user_useremail
    var microsoftUserEmail = this.state.microsoft_user_useremail

    let error = null;
    if (this.state.error) {
      error = <ErrorMessage message={this.state.error.message} debug={this.state.error.debug} />;
    }

    console.log("User type ",dbUserType)
    if (this.state.isAuthenticated) {
      if (dbUserType === 'tester' && dbUserEmail == microsoftUserEmail) {
        return (
          <Router>
            <div>
              <NavBar
                isAuthenticated={this.state.isAuthenticated}
                authButtonMethod={this.state.isAuthenticated ? this.logout.bind(this) : this.login.bind(this)}
                user={this.state.user}
                patch_manager={null}
                products='Products'
                patch_history='Patch History'
                user_create={null} />

              <Container>
                {error}
                <Route exact path="/"
                  render={(props) =>
                    <Welcome {...props}
                      isAuthenticated={this.state.isAuthenticated}
                      user={this.state.user}
                      authButtonMethod={this.login.bind(this)} />
                  } />

                <Route exact path="/home"
                  render={(props) =>
                    <Home />
                  } />

                <Route exact path="/products"
                  render={(props) =>
                    <Products />
                  } />

                {this.state.isAuthenticated ?
                  <Route exact path="/patch-history"
                    render={(props) =>
                      <PatchHistory />
                    }
                  /> : null}


              </Container>
            </div>
          </Router>
        );
      } else if (dbUserType === 'dev' && dbUserEmail == microsoftUserEmail) {
        return (
          <Router>
            <div>
              <NavBar
                isAuthenticated={this.state.isAuthenticated}
                authButtonMethod={this.state.isAuthenticated ? this.logout.bind(this) : this.login.bind(this)}
                user={this.state.user}
                usertype={this.state.user}
                patch_manager='Patch Manager'
                products='Products'
                patch_history='Patch History'
                user_create={null} />

              <Container>
                {error}
                <Route exact path="/"
                  render={(props) =>
                    <Welcome {...props}
                      isAuthenticated={this.state.isAuthenticated}
                      user={this.state.user}
                      authButtonMethod={this.login.bind(this)} />
                  } />

                <Route exact path="/home"
                  render={(props) =>
                    <Home />
                  } />


                <Route exact path="/patch-manager"
                  render={(props) =>
                    <PatchManager />
                  } />

                <Route exact path="/products"
                  render={(props) =>
                    <Products />
                  } />

                {this.state.isAuthenticated ?
                  <Route exact path="/patch-history"
                    render={(props) =>
                      <PatchHistory />
                    }
                  /> : null}

              </Container>
            </div>
          </Router>
        );
      }else if (dbUserType === 'admin' && dbUserEmail == microsoftUserEmail) {
        return (
          <Router>
            <div>
              <NavBar
                isAuthenticated={this.state.isAuthenticated}
                authButtonMethod={this.state.isAuthenticated ? this.logout.bind(this) : this.login.bind(this)}
                user={this.state.user}
                usertype={this.state.user}
                patch_manager='Patch Manager'
                products='Products'
                patch_history='Patch History'
                user_create='User Management' />

              <Container>
                {error}
                <Route exact path="/"
                  render={(props) =>
                    <Welcome {...props}
                      isAuthenticated={this.state.isAuthenticated}
                      user={this.state.user}
                      authButtonMethod={this.login.bind(this)} />
                  } />

                <Route exact path="/home"
                  render={(props) =>
                    <Home />
                  } />


                <Route exact path="/patch-manager"
                  render={(props) =>
                    <PatchManager />
                  } />

                <Route exact path="/products"
                  render={(props) =>
                    <Products />
                  } />

                {this.state.isAuthenticated ?
                  <Route exact path="/patch-history"
                    render={(props) =>
                      <PatchHistory />
                    }
                  /> : null}

                <Route exact path="/add-user"
                  render={(props) =>
                    <AddUser />
                  } />

              </Container>
            </div>
          </Router>
        );
      } else if (dbUserEmail !== microsoftUserEmail) {
        return (
          <Router>
            <div>
              <NavBar
                isAuthenticated={this.state.isAuthenticated}
                authButtonMethod={this.state.isAuthenticated ? this.logout.bind(this) : this.login.bind(this)}
                user={this.state.user}
                patch_manager={null}
                products={null}
                patch_history={null}
                user_create={null}
              />

              <Container>
                {error}
                <Route exact path="/"
                  render={(props) =>
                    <Welcome {...props}
                      isAuthenticated={this.state.isAuthenticated}
                      user={this.state.user}
                      authButtonMethod={this.login.bind(this)} />
                  } />

                <Route exact path="/home"
                  render={(props) =>
                    <Home />
                  } />



              </Container>
            </div>
          </Router>
        );
      } else {
        return (
          <div>
            {/* <h3>you have no access</h3> */}
          </div>

        );
      }



    } else if (!this.state.isAuthenticated) {
      return (
        <Router>
          <div>
            <NavBar
              isAuthenticated={this.state.isAuthenticated}
              authButtonMethod={this.state.isAuthenticated ? this.logout.bind(this) : this.login.bind(this)}
              user={this.state.user} />

            <Container>
              {error}
              <Route exact path="/"
                render={(props) =>
                  <Welcome {...props}
                    isAuthenticated={this.state.isAuthenticated}
                    user={this.state.user}
                    authButtonMethod={this.login.bind(this)} />
                } />






            </Container>
          </div>
        </Router>
      );
    }






  }

  setErrorMessage(message, debug) {
    this.setState({
      error: { message: message, debug: debug }
    });
  }
}

export default App;