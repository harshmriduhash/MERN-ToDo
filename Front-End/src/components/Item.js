import React, { Component } from 'react';

export default class Item extends Component {
  toggleIsCompleted = () => {
    console.log('toggleIsCompleted called From Item Component');
    this.props.toggleChild(this.props.todo.id);
  };
  render() {
    const { toggleIsCompleted } = this;
    const { rahrah, todo } = this.props;
    const { id, title, isCompleted } = todo;
    // const { toggleChild } = this.props;

    return (
      <div style={{ border: '3px red solid' }}>
        <p>
          <input
            onClick={toggleIsCompleted}
            type="checkbox"
            defaultChecked={isCompleted}
          />

          <span
            style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
          >
            {id}. {title}
          </span>
        </p>
        <button onClick={() => rahrah(id)}>X</button>
        {/* <button onClick ={rahrah.bind(id)} >X</button> */}
      </div>
    );
  }
}
