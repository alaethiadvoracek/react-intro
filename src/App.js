import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarList from './components/starList';
import axios from 'axios';//right hand side is what you 
class App extends Component {

  constructor(){
    super()
    this.state = {starList: [{name: 'Fomalhaut', diameter: 'Diameter: 2mi' },{name: 'Elnath', diameter: 'Diameter: 3.63 million mi'},{name: 'Diameter: Gacrux', diameter: 'Diameter: 117 million km' }, {name: 'Deneb', diameter: 'Diameter: 175.58 million mi'} ]}
  }
//when the document is ready 
  componentDidMount(){
    this.getPlanets();
  }

  getPlanets() {
    axios.get('https://swapi.co/api/planets/?format=json')
    .then((response) => {
      console.log(response);
      this.setState({starList: response.data.results});
    })
    .catch((error) => {
      alert('something went wrong!!');
    });//end catch error
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
