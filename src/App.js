import Header from "./component/header"
import './App.css';

import React, { useState } from "react";

/**
 * @param {object} props
 * @param {(item:string) => void} props.addItem
 * @returns {JSX.Element}
 */
function ItemInput(props) {
  const [item, setItem] = useState("");
  const updateItem = function (event) {
    setItem(event.target.value);
  }
  const addToList = function (event) {
    // prevent form from actually submitting
    event.preventDefault();
    props.addItem(item);
    setItem("");
  }

  return (
    <form onSubmit={addToList}>
      <input type="text" value={item} placeholder="enter new item" onChange={updateItem}/>
      <input type="submit" value="submit"/>
    </form>
  );
}

/**
 * @param {object} props
 * @param {string[]} props.items
 * @returns {JSX.Element}
 */
function ItemList(props) {
  const items = [];

  for (let i = 0; i < props.items.length; i++) {
    const listItem = <li key={i}>{props.items[i]}</li>;
    items.push(listItem);
  }

  return (
    <ul>{items}</ul>
  )
}

function App() {
  const [items, setItems] = useState([]);
  const addItem = function (item) {
    setItems(items.concat(item));
  }
 
  return (
    <div className="App">
      <ItemInput addItem={addItem}/>
      <ItemList items={items}/>
    </div>
  );
}

export default App;
