import React, { Component } from 'react';
import Header from '../components/header';
import Canvas from '../components/canvas';

class LayoutEditor extends Component {
	render() {
		return (
			<>
				<Header />
				<Canvas />
			</>
		)
	}
}


export default LayoutEditor;