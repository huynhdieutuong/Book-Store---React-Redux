import React, { Component } from 'react';

export default class Products extends Component {
  render() {
    return (
      <div className="list-products">
        <h2>List of Products</h2>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}