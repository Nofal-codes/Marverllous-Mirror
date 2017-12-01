import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Weather from './Weather-component';
import TrafficMap from './Maps/Maps-traffic-component';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Weather />, document.getElementById('weather'));
ReactDOM.render(<TrafficMap />, document.getElementById('Mapz'));
registerServiceWorker();
