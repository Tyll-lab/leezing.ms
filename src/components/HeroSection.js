import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4.mp4' autoPlay loop muted />
            <h1>Mobilität für Münster</h1>
            <p>Miete jetzt ein Fahrrad aus deiner Nachbarschaft</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    Ich suche eine Fahrrad <i class="fas fa-bicycle" />
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    Ich biete ein Fahrrad <i class="fas fa-bicycle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
