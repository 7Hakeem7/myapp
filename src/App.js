import React from 'react'
import UserProfile from './UserProfile';

const App = () => {
    const users = [
        {id: 1 , name: "Hakeem" , age : 21 , location: "Hyderabad"},
        {id : 2 , name: "Adnan" , age : 22 , location: "Hyderabad"}
    ];

  return (
    <div>
      <h1>User profiles!</h1>
      <div>
        {users.map((user) => (
            <UserProfile key = {user.id} name = {user.name} location = {user.location} />
        ))}
      </div>
    </div>
  )
}

export default App
