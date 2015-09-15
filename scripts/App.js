'use strict';
import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import Item from './Item';

const style = {
  width: '400px'
};

export default class App extends Component {
	constructor(props){
		super(props);
		this.moveItem = this.moveItem.bind(this);
		this.handleClick=this.handleClick.bind(this);
		this.state = {
	      items: [{
	        id: 1,
	        text: '建立基本知识'
	      }, {
	        id: 2,
	        text: '迈向成功的决心：情绪的纪律'
	      }, {
	        id: 3,
	        text: '基本面分析'
	      }, {
	        id: 4,
	        text: '技术分析'
	      }, {
	        id: 5,
	        text: '期权交易'
	      }, {
	        id: 6,
	        text: '交易者的心理架构'
	      }],
	      selected:undefined
	    };
	}

	handleClick(id){
		this.setState({
			selected:id
		});
	}

	moveItem(id, afterId) {
		const { items } = this.state;

		const item = items.filter(i => i.id === id)[0];
		const afterItem = items.filter(i => i.id === afterId)[0];
		const itemIndex = items.indexOf(item);
		const afterIndex = items.indexOf(afterItem);

		this.setState(update(this.state, {
		  items: {
		    $splice: [
		      [itemIndex, 1],
		      [afterIndex, 0, item]
		    ]
		  }
		}));
	}

	render(){
		const {items}=this.state;
		return (
			<div style={style}>
				{items.map(item=>{
					return (
						<Item key={item.id} id={item.id} text={item.text} moveItem={this.moveItem} handleClick={this.handleClick} selected={this.state.selected} target={this}/>
					);
				})}
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);
