import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ quality }) => (
  <span style={quality.style} className={`badge bg-${quality.color} mx-1`}>
    {quality.name}
  </span>
)

Badge.propTypes = {
  quality: PropTypes.object.isRequired
}

export default Badge
