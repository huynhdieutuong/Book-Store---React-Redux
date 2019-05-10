import React, { Component } from 'react';

export default class CartItem extends Component {
  render() {
    return (
      <tr>
        <th scope="col"><img src="https://loremflickr.com/320/240" className="cart-img" alt="title" /></th>
        <th scope="col">Fate Stay Night</th>
        <th scope="col">40.000 đ</th>
        <th scope="col">
          <nav aria-label="...">
            <ul className="pagination pagination-sm">
              <li className="page-item active"><span className="page-link">-</span></li>
              <li className="page-item"><input className="input-quantity" type="number" value={1} /></li>
              <li className="page-item active"><span className="page-link">+</span></li>
            </ul>
          </nav>
        </th>
        <th scope="col">40.000 đ</th>
        <th scope="col"><button type="button" className="btn btn-danger">Delete</button></th>
      </tr>
    )
  }
} 