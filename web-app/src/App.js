import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { items: [] };

  async componentDidMount() {
    const response = await fetch("/api/items");
    const { items } = await response.json();
    this.setState({ items });
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="App">
        <ul>
          {this.state.items.map(item => (
            <div>
              <li key={item.id}>{item.name}</li>
              <li key={item.id}>{item.id}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
