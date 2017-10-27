import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {tabTF} from './redux/reducer'
import ReduxComponentShow from './ReduxComponentShow'

class ReduxSection extends Component {


    render() {
        console.log("THIS PROPS", this.props)
        

        return (
            <div className="App">
                <h1>Redux Section</h1>
                <Link to='/'><button>Go Home</button></Link>
                <div>
                    <button onClick={() => this.props.tabTF(!this.props.tab)}>Open Tab Using Redux</button>
                </div>
                <div>
                    {this.props.tab ? <ReduxComponentShow /> : "sorry not showing. try clicking on the button!"}
                </div>
                <div>
                    <h2>Map dispatch to props section</h2>
                        <br/>
                        <button onClick={(event) => this.handleOnClick(event)}>Dispatch me! </button>
                    </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state
}




export default connect(mapStateToProps, {tabTF})(ReduxSection);
