import React from 'react';
import Navbar from "../Components/Navbar"

const Default = (props) => {
    return (
        <div className="container-fluid">
            <Navbar />
            {props.children}
        </div>
    );
}

export default Default; 