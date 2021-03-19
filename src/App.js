import React from 'react';
import './App.css';
import Profile from './profile/Profile';



function App() {
  const styleObject = {backgroundColor : '#f2f2f2' , minHeight : '100vh'}
  const handleName = (fullName) => {alert(`this is ${fullName} profile`)};
  return (
    <div style= {styleObject} className="App">
      <header className="App-header">
        <Profile fullName="Linda ZOGHLAMI" bio="learning at GO MY CODE" profession="Web Developer" handleName={handleName}>
          <img  style={{height:'250px', width:'250px'}} src='https://www.clipartmax.com/png/middle/296-2960595_female-profile-filled-icon-female-user-icon-png.png' alt='this is me'/>
        </Profile>
        
      </header>
    </div>
  );
}

export default App;
