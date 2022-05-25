import React, { Component } from 'react'
import ProductItem from './ProductItem';
export default class Productlist extends Component {
  render() {
      const {product } = this.props;
    return (
      <div class="row">
        {product.map( (product) =>
            return ( 
                <div key={product.id} className="product">
                    <ProductItem product = {product}></ProductItem>
                </div>
        );
      </div>
    );
  }
}
