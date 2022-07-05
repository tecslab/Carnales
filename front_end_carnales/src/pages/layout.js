import React, { Component } from 'react';
import Header from '../components/header';
import Canvas from '../components/canvas';

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