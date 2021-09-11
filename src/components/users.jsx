import React from 'react'
import Badge from './badge'
import Table from './table'
import PropTypes from 'prop-types'

const Users = (props) => {
  const { users } = props
  const persons = users.length > 1 && users.length < 5 ? 'человека' : 'человек'
  const badgeProps = {
    color: users.length ? 'primary' : 'danger',
    name: users.length
      ? `${users.length} ${persons} тусанет с тобой сегодня`
      : 'Никто с тобой не тусанет',
    style: { fontSize: '2rem', marginBottom: '0.5rem' }
  }
  return (
    <>
      <Badge quality={badgeProps} />
      {users.length ? <Table {...props} /> : null}
    </>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired
}

export default Users
