import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Work extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		data: PropTypes.arrayOf(PropTypes.object).isRequired,
	}

	render () {
		// const {
		// 	classes,
		// 	data,
		// } = this.props;

		return (
			<main id='axiom'>
				<h1>Axiom Bank</h1>
				<p class="subhead">Product Designer, Front-End Developer</p>
				<div class="color-bar">
					<img src="images/ipad.png" alt=""/>
				</div>
				<h5>PURPOSE</h5>
				<h6>Creating a credit card origination system</h6>
				<p class="role">Research, design, and develop a safe and secure credit card application that integrates with Credit Bureaus and Core Banking Providers to make an a credit decision in less than 3 minutes.</p>
				<h5>KEY CONTRIBUTIONS</h5>
				<h6>Designing page architecture as well as page layout</h6>
				<p class="role">Axiom's goal was to not only minimize the amount of time it took a potential customer to find the application, but to minimize the amount of time filling in information. I accomplished the first task by consolidating/streamlining the amount of pages in the pre-application workflow. The second task required much more user testing and competitor research to determine which stages of the application were the most problematic or confusing. This led to significant improvements in the UX and increased onboarding.</p>
				<img src="images/axiom-ia.png" id="ia" alt="pic" />
				<div class="lofi-cont">
					<img src="images/apply1.png" class="lofi-ex" alt="pic" />
					<img src="images/apply2.png" class="lofi-ex" alt="pic" />
					<img src="images/apply3.png" class="lofi-ex" alt="pic" />
					<img src="images/apply4.png" class="lofi-ex" alt="pic" />
				</div>
				<img src="images/hifi.gif" width="700" alt="gif" />
				<h5>TAKEAWAYS</h5>
				<h6>Details, details, details</h6>
				<p class="role">During the creation of this website, I realized how important it is when designing a large system to make everything highly specific so that no details get lost when passing it on to a co-worker. Just because I sometimes operate on assumptions does not mean the next person will.</p>
			</main>
  		);
	}
}

export default (Work);
