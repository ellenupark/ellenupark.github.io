import React from 'react';

const TeachersPet = () => {
    return (
        <>
            <div className="card rotate">
                <div className="default rotate-inner-front" id="teachers-pet"></div>
                <div className="rotate-inner-back">
                    <h3>Teacher's Pet</h3>
                    <p>Teacher's Pet gives teachers the power to create customized flashcard activities and a fun way to interact with their students through flashcard activities.</p>
                    <div className='categories'>
                        <span>React</span><span>Redux</span><span>Ruby on Rails</span><span>MySQL</span><span>Microsoft Azure</span><span>RESTful API</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeachersPet;