import React, { Component, PropTypes } from 'react'

export default class Message extends Component {
  constructor(props){
      super(props);
      this.state = {
      }
  }

  render(){
    return (
        <li>{this.props.username +": " +  this.props.message.text}</li>
    );
  }

}

// class Message extends Component{
//
// }

Message.PropTypes = {
  message: PropTypes.object.isRequired,

}
