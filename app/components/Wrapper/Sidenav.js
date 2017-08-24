// Include React
var React = require("react");

// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component

var Sidenav = React.createClass({
	render: function () {
		return (
			<div className="col col-main s12 m3 green">

				<div className="row">
					<div className="input-field col s12">
						<input id="party_name" type="text" className="validate" placeholder="How you gonna name your party?" />
					</div>
				</div>

				<div className="row">
					<div className="col s12">
						<div className="card sidenav_card white">
							<div className="card-content main-cards">
								<ul className="menu-list">
								
									<li className=""><a className="waves-effect waves-light btn green"><i className="material-icons left">attach_money</i>Budget</a></li>
									<li className=""><a className="waves-effect waves-light btn green"><i className="material-icons left">person</i>Guests</a></li>
									<li className=""><a className="waves-effect waves-light btn green"><i className="material-icons left">account_balance_wallet</i>Expences list</a></li>
									<li className=""><a className="waves-effect waves-light btn green"><i className="material-icons left">shopping_cart</i>Grosseries list</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col s12">
						<div className="card sidenav_card white">
							<div className="card-content main-cards">
								<ul className="menu-list">
									<li className=""><a className="waves-effect waves-light btn green">Feedback</a></li>
									<li className=""><a className="waves-effect waves-light btn green">About</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
});
// Export the component back for use in other files
module.exports = Sidenav;