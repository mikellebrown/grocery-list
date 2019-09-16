import React from "react";
const Grocery = ({ id, name, complete, handleClick, }) => (
  <li 
    key={id} 
    style={ complete ? { ...styles.todo, ...styles.complete } : styles.todo }
    onClick={() => handleClick(id)}
  >
    { name }
  </li>
);
const styles = {
  grocery: {
    cursor: "pointer",
  },
  complete: {
    color: "grey",
    textDecoration: "line-through",
  }
};
export default Grocery;