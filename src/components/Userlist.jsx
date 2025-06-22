import React from 'react'
import { Navigate } from 'react-router-dom';

const Userlist = () => {
    const users = [
        {_id: 1, Name: "Rakesh", Age: 21},
        {_id: 2, Name: "Manisha", Age: 19},
        {_id: 3, Name: "Priyal", Age: 28},
        {_id: 4, Name: "Ayush", Age: 22},
        {_id: 5, Name: "Heena", Age: 37},
    ];

    const handleUser = (userId, userName) => {
      console.log("User clicked", userName);
      Navigate(`/${userId}/${userName}`);
      
    };
    
  return (
    <div>
      <h4>Users</h4>
      <ul>
        {users.map((user) => {
            return <li key={user._id} onClick={() => handleUser(user._id, user.name)}>
              {user.name}
            </li>
        })}
      </ul>
    </div>
  )
}

export default Userlist
