import React, { Component } from 'react';
import './App.css';


class RecipesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      meals: [],
    };
  }



  componentDidUpdate(prevProps) {
    if(this.props.category !== prevProps.category ) {
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.props.category)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              meals: result.meals
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
  }



  render() {
    const { error, isLoaded, meals} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (this.state.meals.length === 0) {
      return <div></div>
    }
    else {
      return(
        <div>
          <p className="App-intro">
            Choose From The Following
          </p>
          <table>

            {meals.map(meal => (
              <tr>
                <td>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <br />
                  <b>{meal.strMeal}</b>
                </td>
              </tr>
            ))

            }


          </table>
        </div>
      );
    }
  }
}

export default RecipesTable;
