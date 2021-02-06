import React from 'react';

const ContactContainer = () => {
    return (
        <div className='contact'>
            <p>Have a question or a project in mind?</p>
            <a className="contact-button" href="mailto:ellenupark@gmail.com" class="contact-button" id="contact">LET'S TALK</a>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/ellenupark/"><i class="fab fa-linkedin fa-5x"></i></a>
				<a href="https://ellen-park.medium.com/"><i class="fab fa-medium fa-5x"></i></a>
				<a href="https://github.com/ellenupark"><i class="fab fa-github fa-5x"></i></a>
            </div>
        </div>
    );
};

export default ContactContainer;