import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SetStateProps extends Component {
  render() {
    return (
      <div className="App">
        <h1>Props from SetState Component</h1>
            <span>{this.props.firstname}</span>
            <br/>
            <br/>
            <button onClick={() => this.props.clearFirstName()}>CLEAR FIRST NAME USING BIND</button>
      </div>
    );
  }
}

export default SetStateProps;
