import React from 'react';
import portrait from '../images/portrait.png'
import SkillsContainer from './SkillsContainer'

const About = () => {
    return (
        <>
            <div className='about'>
                <div className="about-portrait">
                    <img src={portrait} alt="Ellen Park" />
                </div>
                <div className="about-details">
                    <p><span>I'm a Full Stack Engineer specializing in JavaScript, Ruby on Rails, and React.</span></p>
                    <p>Before coding, I worked as a technical designer. I spent my days analyzing and adjusting clothing fit. It was constant problem solving in a fast paced environment, and I loved the challenge.</p>
                    <p>Now, I’m still solving problems. But instead of perfecting clothes, I’m debugging code. With coding, I’ve found a happy balance between creative freedom and my love for organization and efficiency.</p>
                    <p>When I'm not coding, I'm most likely baking swiss rolls, playing video games, or rewatching The Office.</p>
                </div>
                <SkillsContainer />
            </div>
        </>
        
    );
};

export default About;