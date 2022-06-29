import React, { Component } from 'react';
import Header from '../components/headerGen';
import Canvas from '../components/canvasGen';

class Layout extends Component {
	render() {
		return (
			<>
				<Header />
				<Canvas />
			</>
		)
	}
}


export default Layout;