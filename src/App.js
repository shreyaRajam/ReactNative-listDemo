import React, { Component } from 'react'
import Person from './Person';
import data from './data.json'

const App = () => {

  const options = [];

  for (let i = 0; i < data.length; i++) {
    options.push(<Person key ={i} name={data[i].name} age ={data[i].age} id={data[i].id}/>);
  }

  return (
    <div>
      <header style={{textAlign:'center', margin:20, fontSize:20, fontWeight:'bold'}}>Employee List</header>
      {options}
    </div>
  )
}

export default App;