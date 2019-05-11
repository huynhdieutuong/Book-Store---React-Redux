import React, { Component } from 'react';

export default class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <th scope="col"><img src={'./images/' + item.product.image} className="cart-img" alt={item.product.name} /></th>
        <th scope="col">{item.product.name}</th>
        <th scope="col">${item.product.price}</th>
        <th scope="col">
          <nav aria-label="...">
            <ul className="pagination pagination-sm">
              <li className="page-item active"><span className="page-link">-</span></li>
              <li className="page-item"><input className="input-quantity" type="number" value={item.quantity} /></li>
              <li className="page-item active"><span className="page-link">+</span></li>
            </ul>
          </nav>
        </th>
        <th scope="col">${item.product.price * item.quantity}</th>
        <th scope="col"><button type="button" className="btn btn-danger">Delete</button></th>
      </tr>
    )
  }
} 