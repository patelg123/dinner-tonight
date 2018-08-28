import React, { Component } from 'react';
import './App.css';
import CategoriesDropDown from './CategoriesDropDown.js';

class FilterBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var handleToUpdate = this.props.handleToUpdate;

    return(

      <CategoriesDropDown handleToUpdate= {handleToUpdate.bind(this)}/>
    );
  }
}

export default FilterBox;
