import { useState } from 'react';
import './App.css';
import NewUser from './components/NewUser/NewUser';
import Users from './components/Users/Users';
// import UserForm from './components/NewUser/UserForm/UserForm';

const defaultUsers = [
  {id: 1, name: 'Jake', age: 33},
  {id: 2, name: 'Kate', age: 28}
]

const App = () => {
  const [users, setUsers] = useState(defaultUsers);

  const onNewIdHandler = () => {
    console.log(users.length + 1)
    return (users.length + 1)
  }

  const setUsersHandler = (usersReceived) => {
    setUsers((prevUsers) => {
     return [usersReceived, ...prevUsers]
    })
  }

  return (
    <div>
      {/* usersList={users} onSetUser={setUser} */}
        <NewUser onSetUsers={setUsersHandler} onNewId={onNewIdHandler}/>
        <Users usersArray={users}/>
    </div>
  );
}

export default App;
