import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarList from './components/starList';
import axios from 'axios';//right hand side is what you 
class App extends Component {

  constructor(){
    super()
    this.state = {starList: [{name: 'Fomalhaut', diameter: '2mi' },{name: 'Elnath', diameter: '3.63 million mi'},{name: 'Gacrux', diameter: '117 million km' }, {name: 'Deneb', diameter: '175.58 million mi'} ]}
  }


  getPlanets() {
    axios.get('https://swapi.co/api/planets/?format=json')
    .then((response) => {
      console.log(response)
    })
  }
  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <StarList starList={this.state.starList}/>
      
      </div>
    );
  }
}

export default App;
