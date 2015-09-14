'use strict';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';

export default class App extends Component {
	render(){
		return (
			<div>测试</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);
