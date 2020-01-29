import React, { Component } from 'react';

export default class Add extends Component {
  state = {
    title: ''
  };

  addNewTask = () => {
    let newTask = { id: 77, title: this.state.title, isCompleted: false };
    this.props.addItem(newTask);
    this.setState({title:""})
  };

  changeTitle = (event) => {
    // console.log('event.target: ',event.target.value);
    this.setState({title:event.target.value})
  };
  render() {
    const { state, addNewTask, changeTitle } = this;
    return (
      <div style={{ border: '3px orange solid' }}>
        <input
          type="text"
          value={this.state.title}
          onChange={changeTitle}
          placeholder="Insert New ToDo"
        />
        <button onClick={addNewTask}>Submit</button>
      </div>
    );
  }
}
