import React, { Component } from 'react';
import Products from '../components/Products';
import Product from '../components/Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actAddToCart } from '../actions/index';

class ProductsContainer extends Component {
  render() {
    const { products, onAddToCart } = this.props;
    return (
      <Products>
        {
          products.map((product, index) => 
              <Product 
                key={index} 
                product={product} 
                onAddToCart={onAddToCart}
              />)
        }
      </Products>
    )
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => dispatch(actAddToCart(product, 1))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);