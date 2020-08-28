import React from 'react'


  const SearchBar = (props) => {
    return(
      <div className="card" style={{width: "30%"}}>
        <h1>Filter Profiles:</h1>
        <form>
          <input
            onChange={props.handleInput}
            type="search"
            placeholder="search by name:"
          >
          </input>
        </form>
      </div>
    )
  }

export default SearchBar