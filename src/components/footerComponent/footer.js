import React, { Component } from 'react';

class Footer extends Component {
  render() {
  	const ftr1 = {
    crafted: "Crafted with "
		};
  	const ftr2 = {
    crafted: " in Chicago"
		};
    return (
 
				<footer className="page-footer">
					<small>{ftr1.crafted }<span className="img-heart hiddentext"></span>{ ftr2.crafted}</small>
				</footer>
  
    ); 
  }
}

export default Footer;

