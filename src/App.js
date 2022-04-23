import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Suggest from "./components/Suggest"
import DD from "./components/DD"
import {Route,Routes} from 'react-router-dom'
const App=()=> {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/Home" element={<Home/>}/>
      <Route path="/Suggest" element={<Suggest/>}/>
      <Route path="/DD" element={<DD/>}/>
    </Routes>

    </>
  );
}

export default App;
