import React from 'react';
import TsumegoCard from '../components/projects/TsumegoCard'
import LearnHwatuCard from '../components/projects/LearnHwatuCard'

const ProjectsContainer = () => {
    return (
        <div className='projects'>
            <h2>Projects</h2>
            <div className="cards">
                <TsumegoCard />
                <LearnHwatuCard />
                <div className="card">THREE</div>
                <div className="card">FOUR</div>
                <div className="card">FIVE</div>
                <div className="card">SIX</div>
            </div>
        </div>
    );
};

export default ProjectsContainer;