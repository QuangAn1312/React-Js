import React, { Component } from 'react';
import {connect} from 'react-redux';
class demoRedux extends Component {
    increase = () => {
        this.props.increase();
    }
  render() {
    return (

      <div>
          <h1>Redux</h1>
          <p>Count: {this.props.count}</p>
          <button onClick={this.increase} >Incarease</button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increase : () => {
            const action = {type : 'INCREASE'}
            dispatch(action)
        }
    }
}
//  lay ham cua state  tu redux store ve chuyen thanh  props cua compoment 
// mapStateProps nhan vao  1 tham so la state cua redux store 
const mapStateProps = (state ) => {
    return {
        state ,
    };
}
export default connert(mapStateProps,mapDispatchToProps) (demoRedux);