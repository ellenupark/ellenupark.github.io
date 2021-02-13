import React from "react";
import PetPalsMain from '../../../images/pet-pals-details.png'

const PetPalsDetails = (props) => {
    if (!props.toggleStatus) {
        return null;
    }
    return (
        <div className="modal" id="modal">
            <img src={PetPalsMain} alt="Pet Pals Application" />
            <h3>Pet Pals</h3>
            <p>Connect with dog owners and arrange playdates for your dogs.</p>
            <p>Ruby on Rails application with PostgreSQL database.</p>
            <p>Utilizes Devise and OmniAuth for third-party authorization to ensure security of account management.</p>
            <p>Integrated Bootstrap to provide overall styling and streamline user experience.</p>
            <div>
                <a href="https://github.com/ellenupark/petpals"><i className="fab fa-github fa-3x"></i></a>
				<a href="https://www.youtube.com/watch?v=deORxiINv8I"><i className="fab fa-youtube fa-3x"></i></a>
				<a href="https://pet-pals-finder.herokuapp.com"><i className="fas fa-external-link-alt fa-3x"></i></a>
            </div>
            <div onClick={props.toggle} className="close"></div>
        </div>
    )
};

export default PetPalsDetails;