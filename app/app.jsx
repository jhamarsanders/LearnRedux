var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!applicationStyles');

// ReactDOM.render(
//     <p>Redux example</p>,
//     document.getElementById('app')
// );

require('./redux-todo-example');