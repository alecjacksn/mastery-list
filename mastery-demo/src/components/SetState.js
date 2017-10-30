import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SetStateProps from './SetStateProps'

class SetState extends Component {
    constructor() {
        super();

        this.state = {
            first: '',
            last: ''
        }
        this.clearFirstName = this.clearFirstName.bind(this)
    }
    updateFirst(e) {
        this.setState({
            first: e
        })
    }
    updateLast(e) {
        this.setState({
            last: e
        })
    }

    clearFirstName(){
        this.setState({
            first: ''
        })
    }


    render() {
        return (
            <div className="App">
                <Link to={`${this.props.match.params.homepage}`}><button>Go Home</button></Link>
                <br/>
                <div>
                <br/>
        <span>First:<input onChange={(e) => this.updateFirst(e.target.value)} /></span>
                <span>Last:<input onChange={(e) => this.updateLast(e.target.value)} /></span>
                </div>
        <br/>
                <div>
                    <span>First State:<h4>{this.state.first} </h4></span><br/>
                    <span>last State:<h4> {this.state.last}</h4></span>
                </div>
                <SetStateProps firstname={this.state.first} clearFirstName={this.clearFirstName} />
            </div>
        );
    }
}

export default SetState;
