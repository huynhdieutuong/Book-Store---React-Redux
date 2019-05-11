import React, { Component } from 'react';

export default class Product extends Component {

  showRating = rating => {
    const solidStars = Math.floor(rating);
    const regularStars = Math.floor(5 - rating);
    const halfStar = 5 - solidStars - regularStars;
    let stars = [];
    for (let i = 1; i <= solidStars; i++) {
      stars.push(<i className="fas fa-star" key={i}></i>);
    }
    if (halfStar) {
      stars.push(<i className="fas fa-star-half-alt" key={10}></i>);
    }
    for (let i = 1; i <= regularStars; i++) {
      stars.push(<i className="far fa-star" key={i+5}></i>);
    }
    return stars;
  }
  
  render() {
    const { product, onAddToCart } = this.props;
    return (
      <div className="col-md-3 product">
        <div className="card" style={{width: 18 + "rem"}}>
          <img src={'./images/' + product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <div className="card-content">
              <p className="author">{product.author}</p>
              <p className="price">${product.price}</p>
              <p className="review">{this.showRating(product.rating)}</p>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => onAddToCart(product)}>Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
}