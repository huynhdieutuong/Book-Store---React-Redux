import React, { Component } from 'react';
import Products from '../components/Products';
import Product from '../components/Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProductsContainer extends Component {
  render() {
    const { products } = this.props;
    return (
      <Products>
        {
          products.map((product, index) => <Product key={index} product={product} />)
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

export default connect(mapStateToProps, null)(ProductsContainer);