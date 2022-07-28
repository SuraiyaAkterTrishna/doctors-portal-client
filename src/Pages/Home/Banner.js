import React from 'react';
import chair from '../../assets/images/chair.png';
import './Banner.css';
const Banner = () => {
    return (
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse chair-bg">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;