import React from 'react';

const TsumegoCard = () => {
    return (
        <>
            <div className="card rotate">
                <div className="default rotate-inner-front" id="tsumego-solver"></div>
                <div className="rotate-inner-back">
                    <h3>Tsumego Solver</h3>
                    <p>Improve your knowledge of the strategy board game Go by solving and creating practice problems.</p>
                    <div className='categories'>
                        <span>React</span><span>Redux</span><span>Ruby on Rails</span><span>RESTful API</span>
                    </div>
                </div>
            </div>
        </>
        
    );
};


export default TsumegoCard;