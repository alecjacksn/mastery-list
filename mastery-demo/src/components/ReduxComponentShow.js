import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {changeItem} from './redux/reducer'
class ReduxComponentShow extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey this worked cause i used the store! how cool!</h1>
        <br/>
        <br/>
        <h3>this is whats on the store for item:</h3>
        <span>Change it here if you would like!<input onChange={(e) => this.props.changeItem(e.target.value)}/></span>
        <br/>
        <br/>
        <span>{this.props.item}</span>
      </div>
    );
  }
}
function mapStateToProps(state){
    return state
}




export default connect(mapStateToProps, {changeItem})(ReduxComponentShow);
