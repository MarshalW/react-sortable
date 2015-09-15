import React, { PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

class Item {
	render(){
		let style = {
		  border: '1px dashed gray',
		  padding: '0.5rem 1rem',
		  marginBottom: '.5rem',
		  backgroundColor: 'white',
		  cursor: 'move'
		};
		if(this.props.selected && this.props.selected==this.props.id){
			style.backgroundColor='AliceBlue';
		}
		const { text, connectDragSource, connectDropTarget,isDragging} = this.props;
		const opacity = isDragging ? 0 : 1;
		return connectDragSource(connectDropTarget(
			<div style={{ ...style, opacity }}  onClick={this.props.handleClick.bind(this.props.target,this.props.id)}>{text}</div>
		));
	}
}

const type='item';

const itemSource = {
  beginDrag(props) {
    return { id: props.id };
  }
};

function collectSource(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
}

const itemTarget = {
  hover(props, monitor) {
    const draggedId = monitor.getItem().id;

    if (draggedId !== props.id) {
      props.moveItem(draggedId, props.id);
    }
  }
};

function collectTaget(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget()
	};
}

module.exports = DragSource(type, itemSource, collectSource)(DropTarget(type,itemTarget,collectTaget)(Item));
