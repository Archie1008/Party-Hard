// Include React
var React = require("react");

var Sidenav = require("./Wrapper/Sidenav");
var Content = require("./Wrapper/Content");



var Wrapper = React.createClass({
	render: function () {
		return (
			<div className="wrapper">
				<div className="row">
					<Sidenav />

					<Content />

				</div>
			</div>
		);
	}
});
// Export the component back for use in other files
module.exports = Wrapper;