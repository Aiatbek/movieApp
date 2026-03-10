import "./css/Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/">MovieApp</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        </div>
    )
}