import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {

    const { logout } = useLogout();
    const { user } = useAuthContext();

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        setMenuOpen(false);
    };

    return (

        <header className="navbar">

            <div className="nav-container">

                <Link to="/" className="logo">

                    <h2>Seven Women</h2>

                    <span>Building Peace Together</span>

                </Link>

                <nav className="desktop-nav">

                    <Link to="/">Home</Link>

                    <Link to="/#events">Events</Link>

                    <Link to="/#events">Calendar</Link>

                    <Link to="/#members">Members</Link>

                </nav>

                <div className="search-container">

                    <FaSearch />

                    <input
                        placeholder="Search..."
                    />

                </div>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(true)}
                >

                    <FaBars />

                </button>

            </div>

            <div className={`sidebar ${menuOpen ? "active" : ""}`}>

                <button
                    className="close-btn"
                    onClick={() => setMenuOpen(false)}
                >

                    <FaTimes />

                </button>

                <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>

                <Link onClick={() => setMenuOpen(false)} to="/events">Events</Link>

                <Link onClick={() => setMenuOpen(false)} to="/calendar">Calendar</Link>

                <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>

                {!user && (
                    <>
                        <Link onClick={() => setMenuOpen(false)} to="/login">
                            Login
                        </Link>

                        <Link onClick={() => setMenuOpen(false)} to="/signup">
                            Sign Up
                        </Link>
                    </>
                )}

                {user && (

                    <>

                        <span className="user-email">

                            {user.email}

                        </span>

                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >

                            Log Out

                        </button>

                    </>

                )}

            </div>

            {menuOpen && (
                <div
                    className="overlay"
                    onClick={() => setMenuOpen(false)}
                />
            )}

        </header>

    );

}

export default Navbar;