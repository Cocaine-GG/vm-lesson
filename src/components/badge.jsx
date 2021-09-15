import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ quality }) => (
	<span style={quality.style} className={`badge mx-1 bg-${quality.color}`}>
		{quality.name}
	</span>
)

Badge.propTypes = {
	quality: PropTypes.object.isRequired
}

export default Badge
