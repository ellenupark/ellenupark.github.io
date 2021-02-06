import React, { useState } from 'react';
import TsumegoCard from '../components/projects/TsumegoCard'
import LearnHwatuCard from '../components/projects/LearnHwatuCard'
import TeachersPet from '../components/projects/TeachersPet'
import PetPals from '../components/projects/PetPals'
import MadLibLibrary from '../components/projects/MadLibLibrary'
import AcnhVillager from '../components/projects/AcnhVillager'
import TsumegoSolverDetails from '../components/projects/details/TsumegoSolverDetails'
import LearnHwatuDetails from '../components/projects/details/LearnHwatuDetails'
import TeachersPetDetails from '../components/projects/details/TeachersPetDetails'
import PetPalsDetails from '../components/projects/details/PetPalsDetails'
import MadLibLibraryDetails from '../components/projects/details/MadLibLibraryDetails'
import AcnhVillagerDetails from '../components/projects/details/AcnhVillagerDetails'


const ProjectsContainer = () => {   
    const [toggleTsumego, setToggleTsumego] = useState(false);
    const [toggleHwatu, setToggleHwatu] = useState(false);
    const [toggleTeachers, setToggleTeachers] = useState(false);
    const [togglePetPals, setTogglePetPals] = useState(false);
    const [toggleMadLibs, setToggleMadLibs] = useState(false);
    const [toggleAcnh, setToggleAcnh] = useState(false);


    return (
        <div className='projects'>
            <h2>Projects</h2>
            <div className="cards">
                <div onClick={e => setToggleTsumego(!toggleTsumego)}>
                    <TsumegoCard />
                    <TsumegoSolverDetails toggleStatus={toggleTsumego} toggle={e => setToggleTsumego(!toggleTsumego)} />
                </div>
                <div onClick={e => setToggleHwatu(!toggleHwatu)}>
                    <LearnHwatuCard />
                    <LearnHwatuDetails toggleStatus={toggleHwatu} toggle={e => setToggleHwatu(!toggleHwatu)} />
                </div>
                <div onClick={e => setToggleTeachers(!toggleTeachers)}>
                    <TeachersPet />
                    <TeachersPetDetails toggleStatus={toggleTeachers} toggle={e => setToggleTeachers(!toggleTeachers)} />
                </div>
                <div onClick={e => setTogglePetPals(!togglePetPals)}>
                    <PetPals />
                    <PetPalsDetails toggleStatus={togglePetPals} toggle={e => setTogglePetPals(!togglePetPals)} />
                </div>
                <div onClick={e => setToggleMadLibs(!toggleMadLibs)}>
                    <MadLibLibrary />
                    <MadLibLibraryDetails toggleStatus={toggleMadLibs} toggle={e => setToggleMadLibs(!toggleMadLibs)} />
                </div>
                <div onClick={e => setToggleAcnh(!toggleAcnh)}>
                    <AcnhVillager />
                    <AcnhVillagerDetails toggleStatus={toggleAcnh} toggle={e => setToggleAcnh(!toggleAcnh)} />
                </div>
            </div>
        </div>
    );
};

export default ProjectsContainer;