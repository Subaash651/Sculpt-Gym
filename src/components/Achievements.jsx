import React from 'react';
import './Achievements.css';
import athlete1 from '../assets/athlete1.png';
import athlete2 from '../assets/athlete2.png';
import athlete3 from '../assets/athlete3.png';

const achievementsData = [
    { id: 1, image: athlete1, title: 'Regional Champion', name: 'Sarah Jenkins', category: 'Bikini Fitness' },
    { id: 2, image: athlete2, title: 'Pro Card Winner', name: 'Mike Ross', category: 'Bodybuilding' },
    { id: 3, image: athlete3, title: 'Powerlifting Gold', name: 'Jessica Doe', category: 'Strength' },
];

const Achievements = () => {
    return (
        <section className="achievements" id="transformations">
            <div className="container">
                <h2 className="section-title">Latest <span className="text-highlight">Victories</span></h2>
                <div className="achievements-grid">
                    {achievementsData.map((item) => (
                        <div key={item.id} className="achievement-card">
                            <div className="card-image-wrapper">
                                <img src={item.image} alt={item.title} />
                                <div className="card-overlay">
                                    <h3>{item.title}</h3>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                            <div className="card-info">
                                <span className="category">{item.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
