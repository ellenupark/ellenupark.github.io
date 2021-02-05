import React from 'react';
import TsumegoCard from '../components/projects/TsumegoCard'
import LearnHwatuCard from '../components/projects/LearnHwatuCard'
import TeachersPet from '../components/projects/TeachersPet'
import PetPals from '../components/projects/PetPals'
import MadLibLibrary from '../components/projects/MadLibLibrary'
import AcnhVillager from '../components/projects/AcnhVillager'

const ProjectsContainer = () => {
    return (
        <div className='projects'>
            <h2>Projects</h2>
            <div className="cards">
                <TsumegoCard />
                <LearnHwatuCard />
                <TeachersPet />
                <PetPals />
                <MadLibLibrary />
                <AcnhVillager />
            </div>
        </div>
    );
};

export default ProjectsContainer;