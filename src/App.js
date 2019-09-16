import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm';
import './App.css';

class App extends React.Component {
  state = {
    groceries: [
      { id: 1, name: "Milk", complete: true},
      { id: 2, name: "Bread", complete: true},
      { id: 3, name: "Eggs", complete: true},
    ],
  
};

deleteItem() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
   
  });

}
  render() {
    return (
      <div>
        <p><b>Grocery Deleted</b></p>
      </div>
    )
  };




getUniqId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);
}

addItem = (name) => {
  const grocery = { id: this.getUniqId(), name, complete: false, };
  this.setState({ groceries: [grocery, ...this.state.groceries] });
};
handleClick = (id) => {
  this.setState({
    groceries: this.state.groceries.map( grocery => {
      if (grocery.id === id) {
        return { ...grocery, complete: !grocery.complete, };
      }
      return grocery;
    })
  });
};
render() {
  return (
    <div>
      <GroceryForm addItem={this.addItem} />
      <List 
        name="Grocery List" 
        groceries={this.state.groceries} 
        handleClick={this.handleClick} 
      />
    </div>
  );
};
};
 




export default App;