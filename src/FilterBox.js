import React, { Component } from 'react';
import './App.css';
import CategoriesDropDown from './CategoriesDropDown.js';
import AreasDropDown from './AreasDropDown.js';

class FilterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryValue:  '',
      areaValue:      '',
    };
  }

  render() {
    var handleToUpdate = this.props.handleToUpdate;

    return(
      <div>
        <CategoriesDropDown handleToUpdate = {handleToUpdate.bind(this)} value = {this.state.categoryValue}/>
        <AreasDropDown handleToUpdate = {handleToUpdate.bind(this)} value = {this.state.areaValue}/>
      </div>
    );
  }
}

export default FilterBox;
