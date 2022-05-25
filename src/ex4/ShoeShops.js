import React, { Component } from 'react'
import Productlist  from './productlist'
import data from './data.json'
export default class ShoeShops extends Component {
  render() {
    return (
     <div className="container">
         <h1 className="text-center">aaaaa</h1>
         <Productlist products={data} />
     </div>
    )
  }
}
