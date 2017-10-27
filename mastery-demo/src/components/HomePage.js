import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the home page</h1>
        <Link to='/setstate'><button>Set State</button></Link>
        <Link to='/reduxsection'><button>Hey, Lets see if the store works!</button></Link>

      </div>
    );
  }
}

export default HomePage;
