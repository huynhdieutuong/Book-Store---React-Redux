import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { MSG_CART_EMPTY } from '../constants/Message';
import { actDeleteItemInCart, actChangeMessage, actUpdateQuantity } from '../actions/index';

class CartContainer extends Component {

  showCart = cart => {
    const { onDeleteItemInCart, onChangeMessage, onUpdateQuantity } = this.props;
    let result = <tr><th>{MSG_CART_EMPTY}</th></tr>;
    if (cart.length > 0) {
      result = cart.map(item => 
                  <CartItem 
                    key={item.product.id} 
                    item={item} 
                    onDeleteItemInCart={onDeleteItemInCart}
                    onChangeMessage={onChangeMessage}
                    onUpdateQuantity={onUpdateQuantity}
                  />) 
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
  ).isRequired,
  onDeleteItemInCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteItemInCart: product => dispatch(actDeleteItemInCart(product)),
    onChangeMessage: message => dispatch(actChangeMessage(message)),
    onUpdateQuantity: (product, quantity) => dispatch(actUpdateQuantity(product, quantity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);