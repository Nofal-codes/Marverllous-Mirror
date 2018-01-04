
import React, { Component } from 'react';
import './style.css';

import scriptLoader from 'react-async-script-loader';

//const google = window.google; //As mentioned in the user guide, you need to explicitly read any global variables from window.
var mapKey = "AIzaSyAHkyUq8zg1wDeiTuo7-WUHDji16L8-3dU";


class TrafficMap extends Component {

  

  constructor(props){
    super(props);
    this.initMap = this.initMap.bind(this);

  
    this.bomba = "lol";

  }

  componentWillReceiveProps({isScriptLoadSucceed}){

    if (isScriptLoadSucceed) {

        console.log('script loaded cool m8');

        //my function();
        this.initMap();

    }
    else{
        console.log('script failed to loaded');
    }

}



  render() {
    return (
    <div id="map" className="Mapz"></div>    
    );
  }

  //My Functions

  initMap() {

    var google = window.google; // after the script is loaded, the google we use is in global window

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 25.23128015612677, lng: 55.37754819262773},
      disableDefaultUI: true
      ,'draggable': false
    });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  }

  //end
}

export default scriptLoader(
  [
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyAHkyUq8zg1wDeiTuo7-WUHDji16L8-3dU'
    //,'maps.googleapis.com/maps/api/js?v=3&sensor=true',
  ] 
)(TrafficMap);

