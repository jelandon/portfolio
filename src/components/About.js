import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

class About extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
	}

	render () {
		// const {
		// 	classes,
		// } = this.props;

		return (
			<Fragment>
				<h1>About John</h1>
				<div class='about-flex'>
				<div class="surreal"></div>
				<p>Hello! My name is John Landon and I specialize in creating user experiences through both design and front-end development. Growing up, I never considered myself "artistic" - creative yes, but never artistic. It wasn't until I discovered the endless possibilities of computer graphics that I became passionate about graphic design. This led me to Platt College where I earned my Associate Degree in Graphic Design and my B.S. in Web Design. This mixture of design and development gives me a unique understanding of the relationship between front-end and back-end that allows me to improve user experiences at every stage of the build process.<br /><br />This GIF (like GIFT minus the T) shows the steps it took to create my surreal self portrait in Photoshop. I wanted it to represent things that I enjoy, the main theme being my split between love of all things water (water polo, the beach, showers) and all things fire (fireworks, bonfires, s'mores). Can you guess what else I like?</p>
	</div>
			</Fragment>
  		);
	}
}

export default (About);
