// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

var Navbar = require("./components/Navbar");
var Login_intro = require("./components/Login_intro");
var Wrapper = require("./components/Wrapper");



// This code here allows us to render an entire block of Bootstrap layout HTML

// It's especially important to notice two things:

// 1. That all of the bootstrap content was dumped into a single "main-container" div.
//    This can be named anything. But there must always be ONE single div that all of the HTML fits inside of.
// 2. All of the "class" keywords have been replaced by "className".
//    This is because "class" is a reserved keyword in JS.
ReactDOM.render(
  <div className="main-container">
	<Navbar />
	<Login_intro />
	{/* <Wrapper /> */}
  </div>,
  document.getElementById("app")
);