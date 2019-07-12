import React, { Component } from 'react';
import CheckBox from './CheckBox';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      completed: false,
    }
  }
  render() {
    return (
      <div className="todoItem">
        <CheckBox completed="false"/>
        <div className="todoItem_title">{this.props.title}</div>
        <i className="material-icons">play_circle_outline</i>
      </div>
    );
  }
}

export default TodoItem;