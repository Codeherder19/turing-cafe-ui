import React, { Component } from 'react';
import './App.css';
import MainDisplay from '../components/MainDisplay';
import resData from './reservation-data'


class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: resData,
      errorMessage: "",
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({
      allReservations: data,
    }))
    .catch(error => {
        this.setState({errorMessage: error})
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <MainDisplay reservations={this.state.allReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
