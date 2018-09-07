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

    //this.setState({searchTitle: this.props.value +' ' +  this.props.value});
  }

  openModal = (chosenMeal) => {
      this.setState({
        showModal: true,
        chosenMeal: chosenMeal,
      });
  }

  closeModal = () => {
      this.setState({
        showModal: false,
        chosenMeal: '',
      });
  }

//this.setState({searchTitle: this.props.value +' ' +  this.props.value});

  // Only do the rest call once the drop downs have changed and not on initial app load and only if a category is chosen
  componentDidUpdate(prevProps) {

    let restURL;

    switch (this.props.searchType) {
      case 'Category':
      restURL     = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.props.value;
      break;

      case 'Area':
      restURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + this.props.value;
      break;

      default:
      restURL = "";
      break;
    }

    if(this.props.value !== prevProps.value && this.props.value ) {
      fetch(restURL)
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
              isLoaded: false,
              error
            });
          }
      )
    }
  }

  render() {
    const { error, isLoaded, meals} = this.state;

    if (!this.props.value){
      return <div></div>
    }
    else if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (this.state.meals.length === 0) {
      return <div></div>
    }
    else if (!isLoaded) {
      return <div>Loading....</div>
    }
    else {
      return(
        <div>
          <h3>
            {this.props.searchTitle}
          </h3>

          <RecipeModal show={this.state.showModal} onClose={this.closeModal} chosenMeal = {this.state.chosenMeal} />

          {meals.map(meal => (

            <div key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} onClick={() => this.openModal(meal.idMeal)}/>
              <br />
              <h5>{meal.strMeal}</h5>
            </div>

              ))

          }
        </div>
      );
    }
  }
}

export default RecipesTable;
