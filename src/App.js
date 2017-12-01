import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.updateClock = this.updateClock.bind(this)

      this.state = {
        time: Date(),
        Myname: "Ahmad Nofal"
      };

  }

  componentDidMount() {
    this.updateClock();   //this method is for the purpose of updating the time
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React m8</h1>
          <h1 className="App-title">{ this.state.Myname }</h1>
        </header>
        <h1> { this.state.time } </h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Ahmad Nofal App
        </p>
      </div>
    );
  }

  //My Functions

  updateClock() {
    var d = new Date();
    setTimeout(this.updateClock, 1000); 
    this.setState({ 
      time: d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit' , second:'2-digit'})
     });
   }

}

export default App;
