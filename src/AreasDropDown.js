import React, { Component } from 'react';
import './App.css';

class AreasDropDown extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      areas: [],
    };

  }

  handleChange = (event) => {
      var handleToUpdate = this.props.handleToUpdate;
      handleToUpdate('Area', event.target.value);
  }

  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            areas: result.meals
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

    const { error, isLoaded, areas} = this.state;
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

          <select onChange={this.handleChange} value={this.props.value}>
            <option value="">Choose Area</option>
            {areas.map(area => (
              <option key={area.strArea} value={area.strArea}>
                {area.strArea}
              </option>
            ))
            }
          </select>
        </form>

      );
    }
  }
}

export default AreasDropDown;
