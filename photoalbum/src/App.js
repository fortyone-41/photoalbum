import './App.css';
import React from 'react';
import User from './User/User';
import { BrowserRouter, NavLink } from 'react-router-dom'

function App() {
  const [users, setUsers] = React.useState([])


  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setUsers(data))
  }, []);


  return (
    <div className="main">
      <BrowserRouter>
        <div className="users">
          <h3>Users:</h3>
          <div className="links">
            {users.map((user) => (<NavLink to={"/" + user.id} key={user.id}>{user.name}</NavLink>))}
          </div>
        </div>
        <User users={users} />
      </BrowserRouter>
    </div>
  );
}

export default App;
