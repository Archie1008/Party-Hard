
// Include React
var React = require("react");

// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Navbar = React.createClass({
	render: function () {
		return (
			<nav>
				<div className="nav-wrapper green">
					<a href="#" className="brand-logo">Party hard</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a href="#" className="btn-flat waves-effect btn-floating white"><i className="material-icons green-text">settings</i></a></li>						
					</ul>
					
				</div>
			</nav>
		);
	}
});
// Export the component back for use in other files
module.exports = Navbar;