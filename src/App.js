import React, {Component} from "react";

class ItemInput extends Component {
  constructor (props) {
    super(props);

    // component instance state
    this.state = {
      item: ""
    };

    // make it so that within functions, "this" refers to component instance
    this.updateItem = this.updateItem.bind(this);
    this.addToList = this.addToList.bind(this);
  }
  
  updateItem (event) {
    const item = event.target.value;
    // "this" here refers to the component instance
    this.setState({ item: item });
  }

  addToList (event) {
    // prevent form from actually submitting
    event.preventDefault();
    // "this" here refers to the component instance
    this.props.addItem(this.state.item);
    this.setState({ item: "" });
  }

  render () {
    return (
      <form onSubmit={this.addToList}>
        <input type="text" value={this.state.item} placeholder="enter new item" onChange={this.updateItem}/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}

class ItemList extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    const items = [];

    for (let i = 0; i < this.props.items.length; i++) {
      const listItem = <li key={i}>{this.props.items[i]}</li>;
      items.push(listItem);
    }

    return (
      <ul>{items}</ul>
    );
  }
}

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      items: []
    };

    // "this" refers to component instance
    this.addItem = this.addItem.bind(this);
  }

  addItem (item) {
    // "this" here refers to the component instance
    const updatedItems = this.state.items.concat(item);
    this.setState({ items: updatedItems });
  }
 
  render () {
      return (
      <div className="App">
        <ItemInput addItem={this.addItem}/>
        <ItemList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
