import React from 'react'

const UserProfile = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <br />
      <p>{props.location}</p>
    </div>
  )
}

export default UserProfile
