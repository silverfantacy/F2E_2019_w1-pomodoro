import React, { Component } from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state= {
      title: ''
    }
  }
  render() {
    return (
      <div className="inputBox">
        <input type="text" value={this.state.title} placeholder={this.props.placeholder} onChange={this.changeState.bind(this)} onKeyDown={this.onKeyDown.bind(this)}></input>
        <a href=" " onClick={this.onSubmit.bind(this)}>
          <i className="material-icons">add</i>
        </a>
      </div>
    )
  }
  changeState(event) {
    //使用setState將值寫到nameVal中
    this.setState({ title: event.target.value })
  }
  onKeyDown(e) {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  }
  onSubmit(e) {
    e.preventDefault();
    this.addTodo();
  }
  addTodo() {
    let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
    let newTodo = {
      title: this.state.title,
      key: new Date().getTime(),
      completed: false
    }
    todoList.push(newTodo);
    let newList = todoList;
    localStorage.setItem('todoList', JSON.stringify(newList));
    this.setState({ title: '' })
  }
}

export default InputBox;