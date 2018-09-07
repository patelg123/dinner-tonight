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
        <div className="filterbox-grid">

          <div className="filterbox-content">
            <CategoriesDropDown handleToUpdate = {handleToUpdate.bind(this)} value = {this.state.categoryValue}/>
          </div>
          <div className="filterbox-content">
            <AreasDropDown handleToUpdate = {handleToUpdate.bind(this)} value = {this.state.areaValue}/>
          </div>

        </div>
      </div>
    );
  }
}

export default FilterBox;
