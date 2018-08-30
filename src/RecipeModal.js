import React, { Component } from 'react';
import './App.css';

class RecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      showModal: false,
    };
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
    <div>
      <div className="modal-overlay-div" onClick={this.props.onClose}  />
      <div className="modal-content-div">
        <div className="modal-dialog-div">
          <button onClick={this.props.onClose}>
            Close
          </button>
          {this.props.chosenMeal}
        </div>
      </div>

    </div>
  );


  }
}
export default RecipeModal;
