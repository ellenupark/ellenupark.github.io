import React from 'react';

const PetPals = () => {
    return (
        <>
            <div className="card rotate">
                <div className="default rotate-inner-front" id="pet-pals"></div>
                <div className="rotate-inner-back">
                    <h3>Pet Pals</h3>
                    <p>Connect with dog owners and arrange playdates for your dogs.</p>
                    <div className='categories'>
                        <span>Ruby on Rails</span><span>PostgreSQL</span><span>Devise</span><span>OmniAuth</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PetPals;