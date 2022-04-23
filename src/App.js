import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/intro"
import Suggest from "./components/Suggest/suggest"
import DD from "./components/DD/DD"
import {Route,Routes} from 'react-router-dom'
const App=()=> {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Intro/>}/>
      <Route exact path="/Suggest" element={<Suggest/>}/>
      
      <Route exact path="/DD" element={<DD/>}/>
    </Routes>

    </>
  );
}

export default App;
