import React from 'react';
import logo from '../../logo.svg';


function AppFooter()
{
	return (
		<React.Fragment>
			<footer>
				<div className="layout">
					<figure><img src={logo} className="App-logo" alt="logo" /></figure>
					<div class="text">
						<p>Hey, at least the demo works!</p>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
}

export default AppFooter;
