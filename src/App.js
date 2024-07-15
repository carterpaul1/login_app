import React, { useState } from 'react';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="ECPI-Seal.png" className="App-logo" alt="logo" />
      </header>
      <div>
        {user ? (
          <div>
            <h2>Welcome, {user}!</h2>
            <button onClick={() => setUser(null)}>Logout</button>
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
      <footer className="App-footer">
        <div className="Copyright">
          <h3>&copy; Paul Carter 2024</h3>
        </div>
      </footer>
    </div>
  );
};

export default App;

