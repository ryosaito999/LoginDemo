import React, { Component, PropTypes } from 'react'
import Message from './Message.jsx'
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
  

  getTasks() {
      return [
        { _id: 1, text: 'This is task 1' },
        { _id: 2, text: 'This is task 2' },
        { _id: 3, text: 'This is task 3' },
      ];
    }

    renderTasks() {
      return this.getTasks().map((message) => (
        <Message key={message._id} message={message} />
      ));
    }

  render(){
    return (
      <div>
        <ul>
          {this.renderTasks()}
        </ul>
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
