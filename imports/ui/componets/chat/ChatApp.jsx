import React, { Component, PropTypes } from 'react'
import MessageList from './MessageList.jsx'
export default class ChatApp extends Component {
  constructor(props){
      super(props);
      this.state = {
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    alert("Entered form");
  }


  render(){
    return (
      <div>
        <MessageList />
        <form id = "message-form" onSubmit = {this.handleSubmit}>
          Enter Message here
          <div className="form-group">
            <input type="text"
                  id="message-input"
                  className="form-control input-lg"
                  placeholder="Enter message here"/>
          </div>

          <div className="form-group text-center">
            <input type="submit"
                  id="submit-button"
                  className="btn btn-primary btn-lg btn-block"
                  value="Login" />
          </div>
        </form>
      </div>


    //need a form to submit messages
    );
  }
}

ChatApp.PropTypes = {
}
