import React from 'react';
import './App.css';
import Header from './components/header';
//import UserTable from './components/users/table';
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <Routes />
      </div>
    </div>
  );
}

export default App;
