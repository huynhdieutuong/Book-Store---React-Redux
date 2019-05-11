import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="cart">
        <h2>Cart</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Sum</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { children }
          </tbody>
        </table>
      </div>
    )
  }
} 