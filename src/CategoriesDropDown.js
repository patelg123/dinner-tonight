import React, { Component } from 'react';
import './App.css';

class CategoriesDropDown extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categories: [],
    };

  }

  handleChange = (event) => {
      var handleToUpdate = this.props.handleToUpdate;
      handleToUpdate('Category', event.target.value);
  }

  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            categories: result.categories
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){

    const { error, isLoaded, categories} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded)
    {
      return <div>Loading...</div>
    }
    else
    {
      return (

        <form>
          <select onChange={this.handleChange} value={this.props.value} >
            <option value="">Choose Category</option>
            {categories.map(category => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))
            }
          </select>
        </form>
      );
    }
  }
}

export default CategoriesDropDown;
