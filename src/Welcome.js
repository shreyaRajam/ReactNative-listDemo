import React from 'react'
import PropTypes from 'prop-types'

const Welcome  = (propertyObject) => {
    console.log('[Welcome] rendered')

    return (
        <span style={propertyObject.style}>
            Message:&nbsp;{propertyObject.message}
            <br />
            Data:&nbsp;{propertyObject.data}
        </span>
    )
}
Welcome.propTypes = {
    message: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired
}
export default Welcome;