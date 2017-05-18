import React, { Component } from 'react';

class Bio extends Component {
  render() {
  	const visible = {
    visibility: "visible"
		};
		const heading = {
		  greeting: 'Hi there'
		};
    return (

      <bio>
				<section id="about" className="section-about bglight">
					<div className="container">
						<h1 className="headline" style={visible} ><img alt="" src="headshot.jpg" srcSet="headshot.jpg 2x, headshot.jpg 3x" height="120" width="120" /><br />
							{heading.greeting}</h1>
						<div className="text">
							<p>
								Im a Chicago based Front-End Developer with a blue-collar work ethic - utilizing best practices to build websites and effective user experiences on the web. Since 2011, I have worked with various companies like Citi Bank, The Alzheimers Association and a few startups based in the Chicago area.
							</p>
							<p>
								My goals as a Front-End Developer are to understand the aim of the project and engage in client communication. Second, I develop creative solutions that reflect creativity and simplicity. I believe good design is the organization of ideas. For creative inspiration, I draw upon technology, music, popular culture, advante garde styles and classical typography.
							</p>
						</div>
						<a href="Enrique_Soler_resume.pdf" rel="nofollow" target="_blank" className="button" data-ga-event="">View my resume</a>
					</div>
				</section>
      </bio>
    ); 
  }
}

// "const" essentially another name for a var = value becomes a var after babel compile


export default Bio;













			