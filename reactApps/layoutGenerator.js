import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './headerGen';
import Canvas from './canvasGen';

class Layout extends Component {
	render() {
		return (
			<div>
				<Header />
				<Canvas />
			</div>
		)
	}
}


render(<Layout />, document.getElementById('app'));