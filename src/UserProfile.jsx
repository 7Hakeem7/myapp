import React from 'react'

const UserProfile = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.location}</p>
    </div>
  )
}

export default UserProfile
