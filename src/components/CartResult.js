import React, { Component } from 'react';

export default class CartResult extends Component {
  render() {
    return (
      <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col">Total:</th>
        <th scope="col">40.000 đ</th>
        <th scope="col"><button type="button" className="btn btn-primary">Complete Purchase</button></th>
      </tr>
    )
  }
} 