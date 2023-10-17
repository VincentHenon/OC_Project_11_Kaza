import logoPath from "../assets/img/logo.svg"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <Link to="/"><img className="logo" src={logoPath} alt="logo for Kaza" /></Link>
            <nav className="navbar">
                <NavLink to="/" className="HomeLink" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Accueil</NavLink>
                <NavLink to="/about" className="AboutLink" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>A Propos</NavLink>
            </nav>
        </header> 
    )
}

export default Header