import React from 'react';
import logo from './logo.svg';
import './App.css';
import DrinkCards from './DrinkCards'
import DrinkForm from './DrinkForm'
import SearchBar from './SearchBar'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      drinkcards: [],
      nameInput: "",
      drinkInput: "",
      filterTerm: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/drinkcards')
    .then(res => res.json())
    .then(drinkcards => 
      this.setState({drinkcards: drinkcards})
    )
  }

  margaritaImage = (drink) => {
    if (drink === 'Margarita') {
      return "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg"
    } else if (drink === "Blue Margarita") {
      return "https://www.thecocktaildb.com/images/media/drink/qtvvyq1439905913.jpg"
    } else if (drink === "Tommy's Margarita") {
      return "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg"
    } else if (drink === "Whitecap Margarita") {
      return "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg"
    } else if (drink === "Strawberry Margarita") {
      return "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg"
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/drinkcards', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user: this.state.nameInput,
        beverage: this.state.drinkInput,
        image: this.margaritaImage(this.state.drinkInput)
      })
    })
    .then(response => response.json())
    .then(drinkcard => {
      this.setState({
        drinkcards: [...this.state.drinkcards, drinkcard].reverse()
      })
    })
    this.setState({nameInput: ""})
  }

  chooseName = () => {
    return this.state.nameInput
  }

  chooseDrink = () => {
    return this.state.drinkInput
  }

  handleNameChange = (e) => {
    this.setState({nameInput: e.target.value})
  }

  handleDrinkChange = (e) => {
    this.setState({drinkInput: e.target.value})
  }

  handleInput = (e) => {
    this.setState({filterTerm: e.target.value})
  }

  chooseCards = () => {
    if (this.state.filterTerm){
      return this.state.drinkcards.filter(drinkcard =>
        drinkcard.user.toLowerCase().includes(this.state.filterTerm) ||
      drinkcard.user.includes(this.state.filterTerm))
    } else {
      return this.state.drinkcards
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleInput={this.handleInput}/>
        <DrinkForm
          nameInput={this.chooseName()}
          drinkInput={this.chooseDrink()}
          handleNameChange={this.handleNameChange}
          handleDrinkChange={this.handleDrinkChange}
          handleSubmit={this.handleSubmit}
        />
        <DrinkCards cards={this.chooseCards()}/>
      </div>
    );
  }
}

export default App;
