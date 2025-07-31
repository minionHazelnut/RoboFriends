import React from 'react'

const SearchBox = ({searchText, setSearchText}) => {
  return (
    <div className='pa2'>
        <input 
        value = {searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className='pa3 ba b--green bg-lightest-blue' 
        type='search' 
        placeholder='Search Robots' />
    </div>
  )
}

export default SearchBox