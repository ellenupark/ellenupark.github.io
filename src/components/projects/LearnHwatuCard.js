import React from 'react';

const LearnHwatuCard = () => {
    return (
        <>
            <div className="card rotate">
                <div className="default rotate-inner-front" id="learn-hwatu"></div>
                <div className="rotate-inner-back">
                    <h3>Learn Hwatu</h3>
                    <p>Play against an opponent and learn to play the Korean card game known as Hwatu.</p>
                    <div className='categories'>
                        <span>JavaScript</span><span>HTML</span><span>CSS</span><span>Ruby on Rails</span><span>RESTful API</span><span>PostgreSQL</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LearnHwatuCard;