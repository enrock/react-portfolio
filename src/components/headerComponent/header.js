import React, { Component } from 'react';

class Header extends Component {
  render() {
  	const visible = {
    visibility: "visible"
		};
		const hero = {
		 hello: 'Hello, Im Enrique Soler, Front-End Developer and UX Practitioner. I Build web experiences that increase online engagement and make people happy.'
		};
    return (
      <header>

				<div className="flexbox-fix-for-ie">
					<div className="section-intro bgdark vertical-center">
						<div className="container">
							<div className="container">
								<h1 className="headline" style={visible} >{hero.hello}</h1>
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

