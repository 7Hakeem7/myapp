import React from 'react'
import UserProfile from './UserProfile';
import AutoIncrementCounter from './AutoIncrementCounter';

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
      <br/>
      <br/>
      <AutoIncrementCounter/>
    </div>
  )
}

export default App
