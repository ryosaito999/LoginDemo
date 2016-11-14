import YouTube from 'react-youtube'
import React, { Component, PropTypes } from 'react'

export default class ChatApp extends Component {

  render(){
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
    <div>
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />

      <form id = "message-form" onSubmit = {this.handleSubmit}>
        <div className="form-group">
          <input type="text"
                id="link-input"
                ref="linkInput"
                className="form-control input-lg"
                placeholder="Enter Link Here"
          />
        </div>

        <div className="form-group text-center">
          <input type="submit"
                id="submit-video"
                className="btn btn-primary btn-lg btn-block"
                value="Login"
          />
        </div>
      </form>
    </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
