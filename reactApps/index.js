import React, { Component } from 'react';
import { render } from 'react-dom';
import IndexPage from './pages/indexPage';
import Template from './components/template';

class Index extends Component {
	render() {
		return (
			<div>
				<Template />
				<IndexPage />
			</div>
		)
	}
}


render(<Index />, document.getElementById('app'));