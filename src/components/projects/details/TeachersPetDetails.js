import React from "react";
import TeachersPetMain from '../../../images/teachers-pet-details.png'

const TeachersPetDetails = (props) => {
    if (!props.toggleStatus) {
        return null;
    }
    return (
        <div className="modal" id="modal">
            <img src={TeachersPetMain} alt="Teacher's Pet Application" />
            <h3>Teacher's Pet</h3>
            <p>Teacher's Pet gives teachers the power to create customized flashcard activities and a fun way to interact with their students through flashcard activities.</p>
            <p>Created in collaboration with a remote 5 person team of developers and designers during TechTogether's 50 hour hackathon.</p>
            <p>Single page application with a React/Redux frontend.</p>
            <p>Backend RESTful API built with Ruby on Rails and Microsoft's Azure MySQL database.</p>
            <div>
                <a href="https://github.com/cortezd334/teacherspet"><i className="fab fa-github fa-3x"></i></a>
				<a href="https://www.youtube.com/watch?v=N2XwgLc-E0Y&feature=emb_imp_woyt"><i className="fab fa-youtube fa-3x"></i></a>
				<a href="https://devpost.com/software/techtogether-seattle"><i className="fas fa-external-link-alt fa-3x"></i></a>
            </div>
            <div onClick={props.toggle} className="close"></div>
        </div>
    )
};

export default TeachersPetDetails;