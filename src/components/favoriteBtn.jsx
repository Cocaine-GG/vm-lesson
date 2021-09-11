import React from 'react'
import PropTypes from 'prop-types'

const FavoriteBtn = ({ id, status, onFavoriteUser }) => {
  return (
    <button
      onClick={() => onFavoriteUser(id)}
      className="btn btn-dark mx-auto d-block"
    >
      {!status ? <i className="bi bi-star" /> : <i className="bi bi-star-fill text-warning" />}
    </button>
  )
}

FavoriteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onFavoriteUser: PropTypes.func.isRequired
}

export default FavoriteBtn
