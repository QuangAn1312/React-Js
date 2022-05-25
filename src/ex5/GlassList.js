import React, { Component } from 'react'

export default class GlassList extends Component {
  render() {
    const {products} = this.props;
    return (
    <div className="row"> 

      {products.map( (product) => (
      <div key={product.id} className="card" style= { {width : 280,}} >
      <div className="card">
        <div className="card-body"  >
          <img src={product.url} alt=""/>
         <h5 className="card-title">{product.name}</h5>
         {/* <p className="card-text"> {product.desc}</p> */}
       </div>
         </div>
     </div>
      ))};

    </div>

    )
  }
}
