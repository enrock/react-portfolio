import React, { Component } from 'react';

class Connect extends Component {
  render() {
  	const connect = {
    contact: "Let’s connect"
		};
    return (
      <connect>
				<section id="connect" className="section-connect bgdark">
					<div className="container">
						<h1 className="headline">{connect.contact}</h1>
						<a href="mailto:enrockq@gmail.com" className="button" data-ga-event="">Email</a><a href="https://www.linkedin.com/in/enrique-soler-19bb3664" target="_blank" className="button" data-ga-event="">LinkedIn</a>
						<div className="connect-social">
						</div>
					</div>
				</section>
      </connect>
    ); 
  }
}

export default Connect;













			