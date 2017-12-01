
import React, { Component } from 'react';
import './style.css';


const google = window.google; //As mentioned in the user guide, you need to explicitly read any global variables from window.
var mapKey = "AIzaSyAHkyUq8zg1wDeiTuo7-WUHDji16L8-3dU";
var mapScript = "https://maps.googleapis.com/maps/api/js?key=" + mapKey + "&callback=initMap";


class TrafficMap extends Component {

  constructor(props){
    super(props);
    this.initMap = this.initMap.bind(this);


      this.state = {
      };

  }

  componentDidMount() {
    this.initMap();
  }

  render() {
    return (
    <div>
    <script src="maps.googleapis.com/maps/api/js?v=3&sensor=true"></script>
    <script async defer src={mapScript}></script> 
    <div id="map" className="map"></div>
    </div>  
    
      
    );
  }

  //My Functions

  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: {lat: 34.04924594193164, lng: -118.24104309082031}
    });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  }

  //end
}

export default TrafficMap;
