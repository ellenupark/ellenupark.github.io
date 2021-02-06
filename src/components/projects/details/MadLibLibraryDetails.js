import React from "react";
import MadLibLibraryMain from '../../../images/mad-lib-library-details.png'

const MadLibLibraryDetails = (props) => {
    if (!props.toggleStatus) {
        return null;
    }
    return (
        <div class="modal" id="modal">
            <img src={MadLibLibraryMain} alt="Mad Lib Library Application" />
            <h3>Mad Lib Library</h3>
            <p>Browse and share completed mad libs with fellow users.</p>
            <p>CRUD application built with Ruby and Sinatra framework.</p>
            <p>Protects data integrity of SQLite database through Active Record validations on user inputs.</p>
            <p>Follows MVC pattern through separation of concerns for easy application maintenance.</p>
            <div>
                <a href="https://github.com/ellenupark/mad_lib_library"><i class="fab fa-github fa-3x"></i></a>
				<a href="https://www.youtube.com/watch?v=G8yLC63dcd0"><i class="fab fa-youtube fa-3x"></i></a>
				<a href="https://mad-lib-library.herokuapp.com/"><i class="fas fa-external-link-alt fa-3x"></i></a>
            </div>
            <div onClose={props.toggle} class="close"></div>
        </div>
    )
};

export default MadLibLibraryDetails;