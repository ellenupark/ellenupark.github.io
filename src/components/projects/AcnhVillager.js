import React from 'react';

const AcnhVillager = (props) => {
    return (
        <>
            <div className="card rotate">
                <div className="default rotate-inner-front" id="acnh-villager"></div>
                <div onClick={props.toggle} className="rotate-inner-back">
                    <h3>ACNH Villager Directory</h3>
                    <p>ACNH Villager is a Command Line Interface (CLI) that provides detailed information on villagers from Animal Crossing New Horizons.</p>
                    <div className='categories'>
                        <span>CLI</span><span>API</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AcnhVillager;