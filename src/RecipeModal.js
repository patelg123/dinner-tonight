import React, { Component } from 'react';
import './App.css';

class RecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      recipe: [],
    };
  }

  componentDidUpdate(prevProps) {

    if(this.props.chosenMeal !== prevProps.chosenMeal && this.props.chosenMeal ) {
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.props.chosenMeal)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            recipe: result.meals
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
    const { error, isLoaded, recipe} = this.state;
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return <div></div>;
    }
    else if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading....</div>
    }
    else
    {
      return (
        <div>
          <div className="modal-overlay-div" onClick={this.props.onClose}  />
          <div className="modal-content-div">
            <div className="modal-dialog-div">
              <div>
                <button onClick={this.props.onClose}>Close</button>
              </div>

              {recipe.map(detail => (
                <div key={detail.idMeal}>
                  <div>
                    <h4>{detail.strMeal}</h4>
                  </div>
                  <div>
                    <img src={detail.strMealThumb} alt={detail.strMeal}/>
                    <br />
                  </div>
                  <div>
                    <b>Category: </b> {detail.strCategory}
                    <br />
                    <b>Area: </b> {detail.strArea}
                  </div>
                  <div>
                    <h4>Ingredients</h4>
                    <ul>
                      <li>{detail.strIngredient1} ({detail.strMeasure1})</li>
                      <li>{detail.strIngredient2} ({detail.strMeasure2})</li>
                      <li>{detail.strIngredient3} ({detail.strMeasure3})</li>
                      <li>{detail.strIngredient4} ({detail.strMeasure4})</li>
                      <li>{detail.strIngredient5} ({detail.strMeasure5})</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Instructions</h4>
                    {detail.strInstructions}
                  </div>
                </div>
              ))
              }
            </div>
            <div>
              <button onClick={this.props.onClose}>Close</button>
            </div>
          </div>

        </div>
      );
    }

  }
}
export default RecipeModal;
