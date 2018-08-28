import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterBox from './FilterBox.js';
import RecipesTable from './RecipesTable.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };

    this.handleToUpdate = this.handleToUpdate.bind(this);
  }

  handleToUpdate(value) {
    this.setState({category: value});
  }

  render() {

    var handleToUpdate = this.handleToUpdate;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Dinner Tonight App</h1>
        </header>
        <p className="App-intro">
          Select Search Criteria Below:
        </p>
        <FilterBox handleToUpdate= {handleToUpdate.bind(this)} />
        <RecipesTable category={this.state.category}/>
      </div>
    );
  }
}

export default App;
