import React, { Component } from 'react';
import './App.css';
import FilterBox from './FilterBox.js';
import RecipesTable from './RecipesTable.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: '',
      value: '',
      searchTitle: '',
    };

  }

  handleToUpdate = (searchType, value) => {
    this.setState({
      searchType: searchType,
      value: value,
      searchTitle: searchType +':' + value,
    });
  }

  render() {

    var handleToUpdate = this.handleToUpdate;

    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">.</h1>
        </header>
        <p className="App-intro">
          Select Search Criteria Below:
        </p>
        <div className="main-grid">
          <div className="main-grid-side"></div>
          <div className="main-grid-content">
            <FilterBox handleToUpdate= {handleToUpdate} />
            <RecipesTable searchType={this.state.searchType} value={this.state.value} searchTitle={this.state.searchTitle} />
          </div>
          <div className="main-grid-side"></div>
        </div>
      </div>
    );
  }
}

export default App;
