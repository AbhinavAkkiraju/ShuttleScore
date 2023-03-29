import React from "react"
import Navbar from "./Pages/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Log from "./Pages/Log/Log"
import Match from "./Pages/Match/Match"
import Account from "./Pages/Account/Account"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/log' element={<Log/>}/>
        <Route exact path='/match' element={<Match/>}/>
        <Route exact path='/account' element={<Account/>}/>
      </Routes> 
    </Router>
    </>
  )
}

export default App;