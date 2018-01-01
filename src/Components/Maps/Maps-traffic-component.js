
import React, { Component } from 'react';
import './style.css';


const google = window.google; //As mentioned in the user guide, you need to explicitly read any global variables from window.
var mapKey = "AIzaSyAHkyUq8zg1wDeiTuo7-WUHDji16L8-3dU";


class TrafficMap extends Component {

  constructor(props){
    super(props);
    this.initMap = this.initMap.bind(this);

  }

  componentDidMount() {
    this.initMap(); 
    }

  render() {
    return (
    <div className="Mapz">
    <div id="map" className="Mapz"></div>
    </div>  
    
      
    );
  }

  //My Functions

  initMap() {
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

export default TrafficMap;
