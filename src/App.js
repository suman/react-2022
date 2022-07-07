import React, { use } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import UserContext from './Context';
function App() {
  const userObject = {
    name: 'suman bogati',
    domain: 'gleaneo.com',
    email: 'sumanbogati@gmail.com',
  }
  return (
    <div className="App">
      <UserContext.Provider value={userObject}>
        <Dashboard />
      </UserContext.Provider>
    </div>
  );
}

export default App;
