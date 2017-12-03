import React, { Component } from 'react';
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
        {//<h1 className="App-title">{ this.state.Myname }</h1>
        }
        <h2> { this.state.time } </h2>
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
