import React from 'react'
import Badge from './badge'
import PropTypes from 'prop-types'
const QualitiesList = ({ qualities }) => {
	return (
		<>
			{qualities.map((quality) => (
				<Badge key={quality._id + quality.name} quality={quality} />
			))}
		</>
	)
}

QualitiesList.propTypes = {
	qualities: PropTypes.array.isRequired
}

export default QualitiesList
