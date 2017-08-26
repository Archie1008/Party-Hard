// Include React
var React = require("react");

// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Login_intro = React.createClass({
	render: function () {
		return (
			<div>
				<div className="section">

					<div className="logo">
						<h1>Party hard !</h1>
					</div>

					{/* <!--   Icon Section   --> */}
					<div className="row about">
						<div className="col s12 m4">
							<div className="icon-block">
								<h2 className="center green-text"><i className="material-icons">flash_on</i></h2>
								<h5 className="center">Create your event fast.</h5>

								<p className="light">We created this site to make it lightening fast to have your event up and running in no time!</p>
							</div>
						</div>

						<div className="col s12 m4">
							<div className="icon-block">
								<h2 className="center green-text"><i className="material-icons">group</i></h2>
								<h5 className="center">User Friendly.</h5>

								<p className="light">Tired of figuring out how to use complicated websites just to get a simple event created? So were we. We got your back.
								Easy. Simple. </p>
							</div>
						</div>

						<div className="col s12 m4">
							<div className="icon-block">
								<h2 className="center green-text"><i className="material-icons">settings</i></h2>
								<h5 className="center">Easy to work with</h5>

								<p className="light">You can setup your custom event in a jiffy. Creating your party should be fun, and not a chore. Spend less time creating
								and more time doing.</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
});
// Export the component back for use in other files
module.exports = Login_intro;



