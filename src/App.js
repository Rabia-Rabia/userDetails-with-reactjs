import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import User from './Components/User/User';
import SingleUser from './Components/SingleUser/SingleUser';

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="home"/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/user/:userId" element={<SingleUser/>}/>
    </Routes>
  );
};

export default App;
