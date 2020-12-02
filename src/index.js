import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/flaticon.css';
import './assets/css/animation.css';
import $ from 'jquery' // node module

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'owl.carousel/dist/owl.carousel.js';
// import 'owl.carousel/dist/owl.carousel.min.js';

ReactDOM.render(<App/>, document.getElementById('root'));