import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'
import {getUserInfo} from './redux/reducer'

class ServerPage extends Component {
    constructor() {
        super();

        this.state = {
            allInfo: []
        }
    }

    componentDidMount() {
        axios.get('/api/master')
            .then(res => {
                console.log("AXIOS GET", res)
                this.setState({
                    allInfo: res.data
                })
            })
    }


    componentWillRecieveProps(){
        {this.props.reload ? 
            axios.get('/api/master')
            .then(res => {
                console.log("AXIOS GET", res)
                this.setState({
                    allInfo: res.data
                })
                this.props.getUserInfo(this.props.getUserInfo(!this.props.reload))
            })
            :
            null
        }
    }

    resetFunction(){
        this.props.getUserInfo(!this.props.reload)
    }

    mapThroughInfo() {
        var q = this.resetFunction
        var data = {
            name: '',
            company: '',
        }
       function updateName(e){
            data.name = e
        }
        function updateCompany(e){
            data.company = e
        }
    
        function updateInfo(e){
            
            console.log('e',e)    
            var post = {
                name: data.name ? data.name : e.name,
                company: data.company ? data.company : e.company,
                id: e.id
            }
            axios.post('/api/editmaster', post).then(()=> {
                q()
                
            })
            
            

            
            // return console.log("post: ", post)
        }
        // this.props.getUserInfo(!this.props.reload)
        var x = this.state.allInfo
        return x.map((e, i) => {
            return (
                <div key={i}>
                    <br/>
                    <div>Name: {e.name}<br/>
                        <span>Edit Name:<input onChange={(e) => updateName(e.target.value)} /></span>
                    </div>
                    <br/>
                    <div>Company:{e.company ? e.company : "N/A"}<br/>
                    <span>Edit Name:<input onChange={(e) => updateCompany(e.target.value)}/></span>
                    </div>
                    <br/>
                    <div>Phone: {e.phone ? e.phone : "N/A"}</div>
                    <br/>
                    <button onClick={() => updateInfo(e)}>Confirm change </button>
                    <br/>
                    <br/>
                    <br/>
                </div>
                )
        })
    }



    render() {
        console.log("THIS DOT PROPS", this.props)
        var theRender = this.mapThroughInfo()
        return (
            <div className="App">
                <Link to='/'><button>Go Home</button></Link>
                <br />
                <br />
                <h1>Play with the server!</h1>
                <br />
                <h3>Server Info</h3>
            {theRender}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}




export default connect(mapStateToProps, {getUserInfo})(ServerPage);

