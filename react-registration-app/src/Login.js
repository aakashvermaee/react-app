import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton, AppBar, TextField } from 'material-ui';
import axios from 'axios';

import UploadScreen from './UploadScreen';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Login"
            />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

  /*
   * fucniton handleClick, sends user credentials to backend (API)
   */
  async handleClick(event) {
    var apiBaseUrl = "http://localhost:4000/api/v1/";
    var self = this;

    var payload = {
      "email": this.state.username,
      "password": this.state.password
    }

    try {
      const response = await axios.post(`${apiBaseUrl}login`, payload);
      console.log(response);
      if (response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Login successfull");
          var uploadScreen = [];
          uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
          self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
        }
        else if (response.data.code === 204) {
          console.log("Username password do not match");
          alert("username password do not match")
        }
        else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      }
    } catch (error) {
      console.log(error);
    };
  }
}

const style = {
  margin: 15,
};