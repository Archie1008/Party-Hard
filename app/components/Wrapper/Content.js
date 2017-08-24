// Include React
var React = require("react");

// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component

var Content = React.createClass({
	render: function () {
		return (
			<div className="col col-main s12 m8 green ">
				<div className="card white">
					<div className="card-content info-panel main-cards">
					</div>
				</div>
			</div>
		);
	}
});
// Export the component back for use in other files
module.exports = Content;