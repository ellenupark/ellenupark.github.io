import React from "react";
import TsumegoSolverMain from '../../../images/tsumego-solver-details.png'

const TsumegoSolverDetails = (props) => {
    if (!props.toggleStatus) {
        return null;
    }
    return (
        <div className="modal" id="modal">
            <img src={TsumegoSolverMain} alt="Tsumego Solver Application" />
            <h3>Tsumego Solver</h3>
            <p>Improve your knowledge of the strategy board game Go by solving and creating practice problems.</p>
            <p>Single page application with a React/Redux frontend.</p>
            <p>Backend built with Ruby on Rails with RESTful API.</p>
            <div>
                <a href="https://github.com/ellenupark/tsumego-solver-frontend"><i className="fab fa-github fa-3x"></i></a>
				<a href="https://www.youtube.com/watch?v=ySfwkF2VpKw&feature=youtu.be"><i className="fab fa-youtube fa-3x"></i></a>
				<a href="https://tsumego-solver.herokuapp.com"><i className="fas fa-external-link-alt fa-3x"></i></a>
            </div>
            <div onClose={props.toggle} className="close"></div>
        </div>
    )
};

export default TsumegoSolverDetails;