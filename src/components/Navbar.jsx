import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#" className="logo">SCULPT</a>
                <ul className="nav-links">
                    <li><a href="#coaching">Coaching</a></li>
                    <li><a href="#transformations">Transformations</a></li>
                    <li><a href="#posing">Posing</a></li>
                    <li><a href="#education">Education</a></li>
                </ul>
                <a href="#signup" className="btn-cta">Sign Up / Log In</a>
            </div>
        </nav>
    );
};

export default Navbar;
