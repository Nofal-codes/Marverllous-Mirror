import React, { Component } from 'react';

class Weather extends Component {
    
      constructor(props){
        super(props);
    
          this.state = {
  
          };

      }
    
      componentDidMount() {
  
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://weatherwidget.io/js/widget.min.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","weatherwidget-io-js");
  
      }
    
      render() {
        return (
          <a class="weatherwidget-io" href="https://forecast7.com/en/40d71n74d01/new-york/" data-label_1="NEW YORK" data-label_2="WEATHER" data-mode="Current" data-days="3" data-theme="pure" >NEW YORK WEATHER</a>
   
        );
      }
    
      //My Functions
    
   
    
    }
    
  export default Weather;