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

    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(event){

      var handleToUpdate = this.props.handleToUpdate;
      handleToUpdate(event.target.value);
  }

  handleSubmit(event){

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
          <select onChange={this.handleChange}>
            <option value="">Select Category</option>
            {categories.map(category => (
              <option value={category.strCategory}>
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
