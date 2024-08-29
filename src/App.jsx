import { useState } from 'react';
import Sidenav from './components/sidenav';
import Main from './components/main';
import './App.css'; // Import the CSS file for styling

function App() {
  const appStyle = {
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(to right, #800000, #FFD700)', // Maroon to Gold gradient
    display: 'flex',
  };
  
  return (
    <div className="app-container">
      <Sidenav />
      <Main />
    </div>
  );
}

export default App;
