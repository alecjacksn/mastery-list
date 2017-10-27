import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar">
                    <div className="nav-bar-homepage">
                        <span id="home-tab">Home</span>
                        <Link to='/setstate'><button>Set State</button></Link>
                        <Link to='/reduxsection'><button>Hey, Lets see if the store works!</button></Link>
                        <h4>The carrot selector worked! </h4>
                    </div>
                </div>
                <section>
                    <div>
                        <span>Hey</span>
                        my Dude
                        </div>
                    <li>number 1</li>
                    <li>number 2</li>
                    <li>number 3</li>
                    <li>number 4</li>
                    <div className="left-button">
                        Twitter
                    </div>
                </section>
                <div className="list">
                    <ul className="ul-list">
                        <li>Paul Georger</li>
                        <li>Eric Gordon</li>
                        <li>James Harden</li>
                        <li>Lebron</li>
                        <li>Draymond</li>
                        <li>Rudy</li>
                        <li>Varajoa</li>
                        <li>Donovan</li>
                    </ul>
                </div>
                <div className="background">
                    <div className="background-image">
                    </div>
                </div>

            </div>
        );
    }
}

export default HomePage;
