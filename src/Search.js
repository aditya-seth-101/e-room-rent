import React from 'react'

const Search = () => {
  return (
    <div className='searchBar'>
        <form action="">
            <input type="text" placeholder='Enter Location' id='txtInput'/><span>&emsp;</span>
            <button id='txtSubmit'>Search</button>
        </form>
    </div>
  )
}

export default Search