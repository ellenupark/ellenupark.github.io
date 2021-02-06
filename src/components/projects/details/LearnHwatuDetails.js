import React from "react";
import LearnHwatuMain from '../../../images/learn-hwatu-details.png'

const LearnHwatuDetails = (props) => {
    if (!props.toggleStatus) {
        return null;
    }
    return (
        <div class="modal" id="modal">
            <img src={LearnHwatuMain} alt="Learn Hwatu Application" />
            <h3>Learn Hwatu</h3>
            <p>Learn to play the Korean card game known as Hwatu.</p>
            <p>Single page application with a vanilla Javascript, HTML and CSS frontend.</p>
            <p>Backend built with Ruby on Rails following MVC pattern with RESTful API.</p>
            <div>
                <a href="https://github.com/ellenupark/learn-hwatu-frontend"><i class="fab fa-github fa-3x"></i></a>
				<a href="https://www.youtube.com/watch?v=Xey2mvYl8RU"><i class="fab fa-youtube fa-3x"></i></a>
				<a href="https://learn-hwatu.herokuapp.com"><i class="fas fa-external-link-alt fa-3x"></i></a>
            </div>
            <div onClose={props.toggle} class="close"></div>
        </div>
    )
};

export default LearnHwatuDetails;