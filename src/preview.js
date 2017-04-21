import React from 'react';
import ReactDOM from 'react-dom';
import Pairburn from './components/pairburn';
import axios from 'axios';

window.apiUrl = 'https://ronreiter-meme-generator.p.mashape.com/';
axios.defaults.headers.common['X-Mashape-Key'] = 'MASHAPE KEY HERE';

require('../styles/components/pairburn.scss');

ReactDOM.render(<Pairburn />, window.container);
