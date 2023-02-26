import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/intro"
import Prices from './components/Prices/Prices'
import Kisan from "./components/Kisan helpline/Kisan"
import Suggest from "./components/Suggest/suggest"
import DD from "./components/DD/DD"
import {Route,Routes} from 'react-router-dom'
const App=()=> {
  return (
    <>
    <div class="App">
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Intro/>}/>
      <Route exact path="/Suggest" element={<Suggest/>}/>
      <Route exact path="/Kisan" element={<Kisan/>}/>
      
      <Route exact path="/DD" element={<DD/>}/>
      <Route exact path="/prices" element={<Prices/>}/>
    </Routes>
</div>
    </>
  );
}

export default App;
