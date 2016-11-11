import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import ChatApp from '../componets/chat/ChatApp.jsx'

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    }
  }

  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
        <div className="container">
          <h1 className="text-center">
            { loggedIn ? 'Welcome '+currentUser.username : '' }
          </h1>
        </div>
        <ChatApp />
      </div>
    );
  }
}

MainPage.PropTypes = {
  username: React.PropTypes.string
}
