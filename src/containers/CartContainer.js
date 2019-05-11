import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { MSG_CART_EMPTY } from '../constants/Message';

class CartContainer extends Component {

  showCart = cart => {
    let result = <tr><th>{MSG_CART_EMPTY}</th></tr>;
    if (cart.length > 0) {
      result = cart.map((item, index) => <CartItem key={index} item={item} />) 
    };
    return result;
  }

  render() {
    const { cart } = this.props;
    return (
      <Cart>
        { this.showCart(cart) }
        <CartResult cart={cart}/>
      </Cart>
    )
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(CartContainer);