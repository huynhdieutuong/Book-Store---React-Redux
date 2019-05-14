import React, { Component } from 'react';
import { MSG_DELETE_PRODUCT_IN_CART_SUCCESS, MSG_UPDATE_CART_SUCCESS } from '../constants/Message';

export default class CartItem extends Component {
  state = {
    quantity: this.props.item.quantity,
    quan: this.props.item.quantity
  };

  componentDidUpdate() {
    const { item } = this.props;
    if (this.state.quan !== item.quantity) {
      console.log('ren');
      this.setState({
        quantity: item.quantity,
        quan: item.quantity
      })
    }
  }

  onChange = event => {
    let { value, name } = event.target;
    if (name === 'quantity') {
      value = parseInt(value);
    };
    this.setState({
      [name]: value
    });
  }

  deleteItemInCart = product => {
    const { onDeleteItemInCart, onChangeMessage } = this.props;
    onDeleteItemInCart(product);
    onChangeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }

  updateQuantity = (product, quantity) => {
    const { onUpdateQuantity, onChangeMessage } = this.props;
    if (quantity > 0) {
      this.setState({
        quantity
      });
      onUpdateQuantity(product, quantity);
      onChangeMessage(MSG_UPDATE_CART_SUCCESS);
    }
  }

  render() {
    const { item } = this.props;
    const { quantity } = this.state;
    return (
      <tr>
        <th scope="col"><img src={'./images/' + item.product.image} className="cart-img" alt={item.product.name} /></th>
        <th scope="col">{item.product.name}</th>
        <th scope="col">${item.product.price}</th>
        <th scope="col">
          <nav aria-label="...">
            <ul className="pagination pagination-sm">
              <li className="page-item active">
                <span className="page-link" 
                  onClick={() => this.updateQuantity(item.product, item.quantity - 1)}
                >-</span>
              </li>
              <li className="page-item">
                <input 
                  className="input-quantity" 
                  type="number"
                  name="quantity" 
                  value={quantity}
                  onChange={this.onChange}
                  onBlur={() => this.updateQuantity(item.product, quantity)} 
                />
              </li>
              <li className="page-item active">
                <span className="page-link" 
                  onClick={() => this.updateQuantity(item.product, item.quantity + 1)}
                >+</span>
              </li>
            </ul>
          </nav>
        </th>
        <th scope="col">${item.product.price * item.quantity}</th>
        <th scope="col"><button type="button" className="btn btn-danger" onClick={() => this.deleteItemInCart(item.product)}>Delete</button></th>
      </tr>
    )
  }
} 