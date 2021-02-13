import React from 'react';

const MadLibLibrary = (props) => {
    return (
        <>
            <div className="card rotate">
                <div className="default rotate-inner-front" id="mad-lib-library"></div>
                <div onClick={props.toggle} className="rotate-inner-back">
                    <h3>Mad Lib Library</h3>
                    <p>Browse and share completed mad libs with fellow users.</p>
                    <div className='categories'>
                        <span>Ruby</span><span>Sinatra</span><span>SQLite</span><span>Active Record</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MadLibLibrary;