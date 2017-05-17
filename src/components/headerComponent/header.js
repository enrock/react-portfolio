import React, { Component } from 'react';

class Header extends Component {
  render() {
  	var visible = {
    visibility: "visible"
		};
    return (
      <header>

				<div className="flexbox-fix-for-ie">
					<div className="section-intro bgdark vertical-center">
						<div className="container">
							<div className="container">
								<h1 className="headline" style={visible} >Hello, Im <strong>Enrique Soler</strong>, Front-End Developer and UX Practitioner. I Build web experiences that increase online engagement and make people happy.</h1>
								<nav id="js-nav" className="mainnav" style={visible}>
									<ul>
										<li><a href="#work" data-ga-event="">My work</a></li><li><a href="#about" data-ga-event="">About me</a></li><li><a href="#connect" data-ga-event="">Contact</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>

      </header>
    ); 
  }
}

export default Header;

