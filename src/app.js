import React from 'react'
import { connect } from 'react-redux'
// import { createStore } from 'redux'
// import countryList from './redux/reducers'
import d3Globe from './components/d3.js'
import d3 from 'd3'

// let store = createStore(countryList)


import { createStore } from 'redux'
import todoApp from './redux/reducers'

let store = createStore(todoApp)








// import approach1 from './components/approach1.js';
// import approach2 from './components/approach2.js';
// import world from './world-110m.json';
// import names from './world-country-names.tsv';

// document.write("Hello, DOM");

var Globe = React.createClass({
  componentDidMount: function() {
    d3Globe.go();
  },
  render: function () {
    return <h1></h1>;
  }
})

// var Canvas = React.createClass({
//   componentDidMount: function() {
//     approach1.graph();
//   },
//   render: function () {
//     return (
//       <div className="approach1">
//       </div>
//     );
//   }
// });

// var Canvas2 = React.createClass({
//   componentDidMount: function() {
//     approach2.setup();
//   },
//   render: function () {
//     return (
//       <div className="approach2">
//       </div>
//     );
//   }
// });

React.render(<Globe />, document.body);
// React.render(<Canvas />, document.body);
// React.render(<Canvas2 />, document.body);