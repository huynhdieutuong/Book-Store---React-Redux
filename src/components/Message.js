import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div className="message">
        <div className="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      </div>
    )
  }
} 