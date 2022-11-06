import React, { useState } from 'react';
import './App.css';
import Header from './pages/Router/Header';
import { LoginContext } from './context/LoginContext';
function App() {
const [loginUser,setloginUser] = useState(false);
  return (
    <>
    <LoginContext.Provider value={{loginUser,setloginUser}}>
     <Header/>
     </LoginContext.Provider>
    </>
  );
}

export default App;
