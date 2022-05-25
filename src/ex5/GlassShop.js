import React, { Component } from 'react';
import ProductGlass from "./ProductGlass";
import GlassList from "./GlassList";
import data from "./data.json"


export default class GlassShop extends Component {
  handleSelectProduct= (product) => {
    console.log(product);
  }
  render() {
    return (
      <div className="container-heading" style={ { backgroundImage : `url(../image/glassesImage/background.jpg)` ,  height:1000 , backgroundRepeat: "noRepeat" , backgroundSize:"cover" , backgroundPosition: "center",   } }  >
         <h1 className="text-center"> TRY GLASSES APP ONLINE</h1>
        
        <GlassList 
         products= {data}
         onSelect = {this.handleSelectProduct}
          />
        <ProductGlass />
        
          
      </div>
    )
  }
}
