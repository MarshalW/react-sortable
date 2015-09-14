'use strict';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import Item from './Item';

const style = {
  width: '400px',
  backgroundColor: 'yellow'
};

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
	      cards: [{
	        id: 1,
	        text: 'Write a cool JS library'
	      }, {
	        id: 2,
	        text: 'Make it generic enough'
	      }, {
	        id: 3,
	        text: 'Write README'
	      }, {
	        id: 4,
	        text: 'Create some examples'
	      }, {
	        id: 5,
	        text: 'Spam in Twitter and IRC to promote it'
	      }, {
	        id: 6,
	        text: '???'
	      }, {
	        id: 7,
	        text: 'PROFIT'
	      }]
	    };
	}
	render(){
		const {cards}=this.state;
		return (
			<div style={style}>
				{cards.map(card=>{
					return (
						<Item key={card.id} id={card.id} text={card.text}/>
					);
				})}
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);
