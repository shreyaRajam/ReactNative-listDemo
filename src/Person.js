import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Person = (propertyObject) => {

    let itemVal = propertyObject.name + "," + propertyObject.id + "," + propertyObject.age
    return (
        <div style={{textAlign:'center'}}>
            <span >{itemVal}</span>
            <div style={{height:1, backgroundColor:'black', marginTop:10, marginBottom:20}}/>
        </div>
    )
}


Person.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    age:PropTypes.number.isRequired
}

export default Person;
