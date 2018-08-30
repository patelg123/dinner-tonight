import React, { Component } from 'react';
import RecipeModal from './RecipeModal';
import './App.css';

class RecipesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      meals: [],
      showModal: false,
      chosenMeal: '',
    };


  }

  toggleModal = (chosenMeal) => {
      this.setState({
        showModal: !this.state.showModal,
        chosenMeal: chosenMeal,
      });
  }



  // Only do the rest call once the drop downs have changed and not on initial app load and only if a category is chosen
  componentDidUpdate(prevProps) {
    if(this.props.category !== prevProps.category && this.props.category ) {
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

    if (!this.props.category){
      return <div></div>
    }
    else if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (this.state.meals.length === 0) {
      return <div></div>
    }
    else {
      return(
        <div>
          <p className="App-intro">
            Choose From The Following:
          </p>

          <RecipeModal
            show={this.state.showModal}
            onClose={this.toggleModal}
            chosenMeal = {this.state.chosenMeal}
          />

          <table>
            <tbody>
              {meals.map(meal => (

                <tr key={meal.idMeal}>
                  <td>
                    <img src={meal.strMealThumb} alt={meal.strMeal} onClick={() => this.toggleModal(meal.idMeal)}/>
                    <br />
                    <b>{meal.strMeal}</b>
                  </td>
                  <td>
                    <button onClick={() => this.toggleModal(meal.idMeal)}>View Recipe</button>
                  </td>

                </tr>

              ))

              }
            </tbody>

          </table>







        </div>
      );
    }
  }
}

export default RecipesTable;
