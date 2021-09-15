import React from 'react'
import PropTypes from 'prop-types'
const GroupList = ({
	items,
	valueProperty,
	contentProperty,
	onItemSelect,
	selectedItem
}) => {
	return (
		<ul className="list-group text-center">
			{Object.keys(items).map((item) => {
				const className =
					items[item] === selectedItem
						? 'list-group-item active'
						: 'list-group-item'
				return (
					<li
						onClick={() => onItemSelect(items[item])}
						key={items[item][valueProperty]}
						className={className}
						role="button"
					>
						{items[item][contentProperty]}
					</li>
				)
			})}
		</ul>
	)
}

GroupList.defaultProps = {
	valueProperty: '_id',
	contentProperty: 'name'
}
GroupList.propTypes = {
	items: PropTypes.object.isRequired,
	valueProperty: PropTypes.string.isRequired,
	contentProperty: PropTypes.string.isRequired,
	onItemSelect: PropTypes.func.isRequired,
	selectedItem: PropTypes.object
}

export default GroupList
