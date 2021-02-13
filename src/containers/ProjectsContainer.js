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
                <div>
                    <TsumegoCard toggle={e => setToggleTsumego(!toggleTsumego)}/>
                    <TsumegoSolverDetails toggleStatus={toggleTsumego} toggle={e => setToggleTsumego(!toggleTsumego)} />
                </div>
                <div>
                    <LearnHwatuCard toggle={e => setToggleHwatu(!toggleHwatu)} />
                    <LearnHwatuDetails toggleStatus={toggleHwatu} toggle={e => setToggleHwatu(!toggleHwatu)} />
                </div>
                <div>
                    <TeachersPet toggle={e => setToggleTeachers(!toggleTeachers)} />
                    <TeachersPetDetails toggleStatus={toggleTeachers} toggle={e => setToggleTeachers(!toggleTeachers)} />
                </div>
                <div>
                    <PetPals toggle={e => setTogglePetPals(!togglePetPals)} />
                    <PetPalsDetails toggleStatus={togglePetPals} toggle={e => setTogglePetPals(!togglePetPals)} />
                </div>
                <div>
                    <MadLibLibrary toggle={e => setToggleMadLibs(!toggleMadLibs)} />
                    <MadLibLibraryDetails toggleStatus={toggleMadLibs} toggle={e => setToggleMadLibs(!toggleMadLibs)} />
                </div>
                <div>
                    <AcnhVillager  toggle={e => setToggleAcnh(!toggleAcnh)} />
                    <AcnhVillagerDetails toggleStatus={toggleAcnh} toggle={e => setToggleAcnh(!toggleAcnh)} />
                </div>
            </div>
        </div>
    );
};

export default ProjectsContainer;