import { NavLink } from "react-router-dom";
import '../css/NavBar.css'

function NavBar() {
    return (
        <nav>
            <NavLink 
            to="/"
            className="nav-link"
            >
                home
            </NavLink>
            <NavLink
            to="/newpost"
            className="nav-link"
            >
                new post
            </NavLink>
            <NavLink 
            to="/about"
            className="nav-link"
            >
                about
            </NavLink>
        </nav>
    )
}

export default NavBar