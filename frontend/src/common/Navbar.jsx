import {Link,  useNavigate } from "react-router-dom";
import ApiService from "../api/ApiService"
import "../styles/Header.css"

const Navbar = () => {
    const isAuthenticated = ApiService.isAthenticated();
    const navigate = useNavigate()

    const handleLogout = () => {
        const isLogout = window.confirm("Are you sure you want to logout?")
        if (isLogout) {
            ApiService.logout();
            navigate("/login")
        }
    }


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <span className="logo-icon">✓</span>
                        <span className="logo-text">Task Manager</span>
                    </Link>
                </div>

                <div className="desktop-nav">
                    {isAuthenticated ? (
                        <>
                            <Link to="/tasks" className="nav-link">
                                <span className="nav-icon">📋</span>
                                My Tasks
                            </Link>
                            <button onClick={handleLogout} className="nav-button logout-btn">
                                <span className="nav-icon">🚪</span>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link">
                                <span className="nav-icon">🔐</span>
                                Login
                            </Link>
                            <Link to="/register" className="nav-link register-link">
                                <span className="nav-icon">✨</span>
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;