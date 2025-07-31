import React, { Component, useEffect, useState } from 'react'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'
import './App.css'
import Scroll from './Scroll'


const App = () => {
    const [searchText, setSearchText] = useState('')
    const [filteredRobots, setFilteredRobots] = useState([])
    console.log('searchText', searchText)

useEffect(() => {
    if (searchText.length === 0){
        setFilteredRobots(robots)
    } else {
        setFilteredRobots(robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchText.toLowerCase())
    }
    ))
    }
}, [robots, searchText])
    
    
    console.log('filteredRobots', filteredRobots)

  return (
    <div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Robots</h1>
        <SearchBox  searchText={searchText} setSearchText={setSearchText} />
        </div>
        <CardList robots={filteredRobots}/>
    </div>
  )
}

export default App




