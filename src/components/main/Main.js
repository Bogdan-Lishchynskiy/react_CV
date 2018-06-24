import React, { Component } from 'react';
// import ReactDOM from "react-dom";


 import './Main.css';


class Main extends Component {
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="Main-info">{this.props.title}</h1>
        </header>
        
        <p className="Content">{this.props.container}</p>
      </div>
    );
  }
}

export default Main;
