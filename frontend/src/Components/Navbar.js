import { Link } from "react-router-dom";
import {  FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const navigate = useNavigate()
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        setMenuOpen(false);
        navigate('/')  
    };

    return (

        <header className="navbar">

            <div className="nav-container">

                <Link to="/" className="logo">

                    <h2>Eight Women</h2>

                    <span>Building Peace Together</span>

                </Link>

                <nav className="desktop-nav">

                    <Link to="/">Home</Link>

                    <Link to="/#events">Events</Link>

                    <Link to="/#members">Members</Link>

                    <Link to="/get-involved">Get Involved</Link>

                </nav>

                

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(true)}
                >

                    <FaBars />

                </button>

            </div>
            {menuOpen && (
                <div
                    className="overlay"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <div className={`sidebar ${menuOpen ? "active" : ""}`}>

                <button
                    className="close-btn"
                    onClick={() => setMenuOpen(false)}
                >

                    <FaTimes />

                </button>
                <div className="sidebar-brand">
                <h2>Eight Women</h2>
                <p>Building Peace Together</p>
            </div>

                <Link onClick={() => setMenuOpen(false)} to="/#members">Home</Link>

                <Link onClick={() => setMenuOpen(false)} to="/#events">Events</Link>

                <Link onClick={() => setMenuOpen(false)} to="/get-involved">Get Involved</Link>

                <Link onClick={() => setMenuOpen(false)} to="/our-work">What We Do</Link>

                {!user && (
                    <>
                        <Link onClick={() => setMenuOpen(false)} to="/login">
                            Admin
                        </Link>

                        {/*<Link onClick={() => setMenuOpen(false)} to="/signup">
                            Sign Up
                        </Link>*/}
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

            

        </header>

    );

}

export default Navbar;