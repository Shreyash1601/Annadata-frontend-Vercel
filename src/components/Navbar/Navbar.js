import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.jpg'
import 'bootstrap/dist/css/bootstrap.css'
import  {NavLink,Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand" to="/"><img src={logo} height="30" width="25" alt="logo"/>Annadata</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
      <li class="nav-item active">
        <Link className="nav-link" to="/Home">Home</Link>
      </li>
      <li class="nav-item active">
        <NavLink className="nav-link" to="/Suggest">Suggest</NavLink>
      </li>
      <li class="nav-item active">
        <NavLink className="nav-link" to="/DD">DD Kisaan</NavLink>
      </li>
    </ul>
  
  </div>
</nav>
  </>
    )
}
export default Navbar