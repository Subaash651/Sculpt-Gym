import React from 'react';
import './Transformations.css';
import beforeImg from '../assets/before.png';
import afterImg from '../assets/after.png';

const Transformations = () => {
    return (
        <section className="transformations-section">
            <div className="container">
                <h2 className="section-title">REAL <span className="text-highlight">TRANSFORMATIONS</span></h2>

                <div className="transformation-showcase">
                    <div className="trans-card before">
                        <div className="badge">BEFORE</div>
                        <img src={beforeImg} alt="Before Transformation" />
                    </div>
                    <div className="trans-arrow">
                        ➤
                    </div>
                    <div className="trans-card after">
                        <div className="badge">AFTER</div>
                        <img src={afterImg} alt="After Transformation" />
                    </div>
                </div>

                <div className="trans-content">
                    <h3>John's Journey</h3>
                    <p>"SCULPT changed my life. 12 weeks of intense coaching and nutrition planning."</p>
                    <button className="btn-cta-outline">View More Stories</button>
                </div>
            </div>
        </section>
    );
};

export default Transformations;
