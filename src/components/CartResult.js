import React, { Component } from 'react';

export default class CartResult extends Component {
  
  showTotalAmount = cart => {
    let totalAmount = 0;
    for (let item of cart) {
      totalAmount += item.product.price * item.quantity;
    }
    return totalAmount;
  }

  render() {
    const { cart } = this.props;
    return (
      <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col" className="total-title">Total:</th>
        <th scope="col" className="total-amount">${this.showTotalAmount(cart)}</th>
        <th scope="col"><button type="button" className="btn btn-primary">Complete Purchase</button></th>
      </tr>
    )
  }
} 