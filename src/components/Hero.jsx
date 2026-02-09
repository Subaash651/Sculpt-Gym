import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    <span className="outline-text">THE</span> TEAM RESULTS
                </h1>
                <h2 className="hero-subtitle">REAL PEOPLE, REAL RESULTS</h2>
                <a href="#coaching" className="btn-hero">Start Your Journey</a>
            </div>
        </section>
    );
};

export default Hero;
