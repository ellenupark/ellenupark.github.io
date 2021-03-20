import React from 'react';
import { Link } from "react-router-dom";

const SkillsContainer = () => {
    return (
        <div className='skills'>
            <div className='skills-list'>
                <h3>Languages</h3>
                <div className="icons">
					<i className="devicon-javascript-plain colored"></i>
					<p>JavaScript</p>
				</div>
                <div className="icons">
					<i className="devicon-ruby-plain colored"></i>
					<p>Ruby</p>
				</div>
                <div className="icons">
					<i className="devicon-html5-plain"></i>
					<p>HTML5</p>
				</div>
                <div className="icons">
					<i className="devicon-css3-plain colored"></i>
					<p>CSS3</p>
				</div>
            </div>
            <div className='skills-list'>
                <h3>Technologies</h3>
                <div className="icons">
                    <i className="devicon-react-original colored"></i>
					<p>React</p>
				</div>
                <div className="icons">
                    <i className="devicon-redux-original colored"></i>
					<p>Redux</p>
				</div>
                <div className="icons">
                    <i className="devicon-rails-plain colored"></i>
					<p>Ruby on Rails</p>
				</div>
                <div className="icons">
                    <i className='fas fa-database'></i>
					<p>SQL</p>
				</div>
                <div className="icons">
                    <i className="devicon-postgresql-plain colored"></i>
					<p>PostgreSQL</p>
				</div>
                <div className="icons">
                    <i className="devicon-bootstrap-plain colored"></i>
					<p>Bootstrap</p>
				</div>
            </div>
        </div>
    );
};

export default SkillsContainer;