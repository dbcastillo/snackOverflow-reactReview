import React from 'react'

class DrinkForm extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div className="card" style={{width: "30%"}}>
        <h2>Create Profile</h2>
        <form onSubmit={this.props.handleSubmit}>
          <input
          type="text"
          value={this.props.nameInput}
          name="nameInput"
          onChange={this.props.handleNameChange}
          placeholder="Enter name here:">
          </input>
          <h6>Choose Drink</h6>
          <select
            onChange={this.props.handleDrinkChange}
            value={this.props.value}
            name="drink">
              <option value="Margarita">Margarita</option>
              <option value="Blue Margarita">Blue Margarita</option>
              <option value="Tommy's Margarita">Tommys Margarita</option>
              <option value="Whitecap Margarita">Whitecap Margarita</option>
              <option value="Strawberry Margarita">Strawberry Margarita</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default DrinkForm