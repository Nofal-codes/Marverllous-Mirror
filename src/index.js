import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Time from './Components/Time/Time';
import Weather from './Components/Weather/Weather-component';
import TrafficMap from './Components/Maps/Maps-traffic-component';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Time />, document.getElementById('root'));
ReactDOM.render(<Weather />, document.getElementById('weather'));
ReactDOM.render(<TrafficMap />, document.getElementById('Mapz'));
registerServiceWorker();
