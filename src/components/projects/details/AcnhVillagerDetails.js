import React from "react";
import AcnhVillagerMain from '../../../images/acnh-villager-details.png'

const AcnhVillagerDetails = (props) => {
    if (!props.toggleStatus) {
        return null;
    }
    return (
        <div class="modal" id="modal">
            <img src={AcnhVillagerMain} alt="ACNH Villager Application" />
            <h3>ACNH Villager</h3>
            <p>ACNH Villager is a Command Line Interface (CLI) that provides detailed information on villagers from Animal Crossing New Horizons. It is built with object oriented Ruby and utilizes data from an outside API.</p>        
            <div>
                <a href="https://github.com/ellenupark/acnh_villager"><i class="fab fa-github fa-3x"></i></a>
            </div>
            <div onClose={props.toggle} class="close"></div>
        </div>
    )
};

export default AcnhVillagerDetails;