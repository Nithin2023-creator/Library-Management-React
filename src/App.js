import React from 'react';

function App() {
  const [users, setUsers] = React.useState([
    { id: 1, name: 'Alice', isActive: true },
    { id: 2, name: 'Bob', isActive: false },
    { id: 3, name: 'Charlie', isActive: true },
    { id: 4, name: 'David', isActive: false },
  ]);

  const [showActiveOnly, setShowActiveOnly] = React.useState(false);

  const toggleShowActive = () => {
    setShowActiveOnly(prev => !prev);
  };

  const filteredUsers = showActiveOnly
    ? users.filter(user => user.isActive)
    : users;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>User List</h2>
      <button onClick={toggleShowActive}>
        {showActiveOnly ? 'Show All Users' : 'Show Active Users'}
      </button>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} {user.isActive ? '(Active)' : '(Inactive)'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
