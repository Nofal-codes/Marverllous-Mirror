import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {


  constructor(props) {
    super(props);

    this.state = {
    };

    //openmap api with key for dubai
    var apiKey = "ebe8fde725567e04bd1e8c0742900ac2"
    this.URL = "https://api.openweathermap.org/data/2.5/find?q=Dubai,AE&units=metric&appid=" + apiKey;


  }

  componentWillMount() {


  }

  componentDidMount() {
    fetch(this.URL)
      .then(res => res.json())
      .then((result) => {

        // check if the http request is ok and set state
        if (result.cod == "200") {
        this.setState({
          isLoaded: true,
          OpenWeatherJson: result
        });
      } else {
        this.setState({
          isLoaded: false,
        });
      }
      // end of setstate with checking

      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {

        this.setState({
          isLoaded: false,
          error
        });

      }

      )

  }

  render() {

    if (this.state.isLoaded != true) {
    return ( <p>{"Loading"}</p> );
    } else {
    return (
      <p>{this.state.OpenWeatherJson.list[0].name + " "
        + this.state.OpenWeatherJson.list[0].main.temp + " "
        + this.state.OpenWeatherJson.list[0].weather[0].description}</p>
    );}

  }

  //My Functions



}

export default Weather;
