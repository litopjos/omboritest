import React, { Component } from 'react';
import {connect} from "react-redux";
import logo from './pulse.png';
import './App.css';


import {RenderUsers} from "./components/renderusers";
import {startGetUserData} from "./redux/actions/reqresactions";
import {ShowLoading} from "./components/ShowLoading";

class App extends Component {

  constructor(props){
    super(props);

    // Set the component state
    this.state = {
        isLoading: true
    }

    // Start the process of getting the user data.
    this.props.getUserData(1);

  }

  render() {

    return (
      <div className="App container">

        {/* Show the Loading component only once.*/}
        {this.state.isLoading && 
          <ShowLoading timeInterval={3000} timeOutCallback={this.handleTimeOut}/>}

        {/* Render the users once the Loading component has timed out. */}
        {!this.state.isLoading && <RenderUsers users={this.props.userData}/>}

        {/* Show the 'More users' indicator if appropriate */}
        { (!this.state.isLoading && this.props.moreUsers) && 
          <button  onClick = {this.handleMoreUsers}>
            more users...
          </button>
        }

        {/* Show the 'no more users' indicator if appropriate */}
        { (!this.state.isLoading && !this.props.moreUsers) && <h1>no more users</h1>}        
        
      </div>
    );

  }

  // This called when 'more users' is clicked.
  handleMoreUsers = ()=>{
    this.props.getUserData(this.props.userPage+1)
  }

  // This called when the Loading component times out.
  handleTimeOut = ()=>{
    this.setState({isLoading:false})
  }

}
/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
*/

const MapStateToProps = (state)=>{
  return {
      userData: state.userData,
      userPage: state.userPage,
      moreUsers: state.moreUsers
  }
}
  
const MapDispatchToProps = (dispatch)=>{
    return {
        getUserData: (page)=>dispatch(startGetUserData(page))
    }
}
  
const connectedApp = connect(MapStateToProps,MapDispatchToProps)(App);
  

export default connectedApp;
