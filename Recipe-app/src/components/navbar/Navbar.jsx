import { Link, NavLink } from 'react-router-dom';
import {useState} from 'react';
import './Navbar.css';

const Navbar = () => {

  const [show, setShow] = useState(false);

  const user = localStorage.getItem("user");

  const toggleMenu = () =>{
    setShow(!show);
  }

  const setUser = () =>{
      localStorage.removeItem("user");
  }

  return (
    <nav className="navWrapper">

      <div>
        <Link to="/" >
          <i>{"Recipe "}</i> 
          <span>App</span>
        </Link>
      </div>

      <div className={show ? "linkWrapper show" : "linkWrapper"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink onClick={setUser} to="/login">{user ? "Logout" : "Login"}</NavLink>
      </div>

      <div className="burgerMenu" onClick={toggleMenu}>
        &#9776;
      </div>
      
    </nav>
  )
}

export default Navbar;