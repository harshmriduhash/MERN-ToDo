import React, { Component } from 'react';
import Item from './Item'
export default class List extends Component {
 

  render() {
    const {todos,toggle,deldel} = this.props; 
    return (
      <div style={{ border: '3px green dotted' }}>
        {/* <h6>List</h6> */}
      {
        todos.map((todo,index)=>{
          return (<Item key={todo.id} todo={todo} rahrah={deldel} toggleChild={toggle}/>)
        })
      }
       

      </div>
    );
  }
}
