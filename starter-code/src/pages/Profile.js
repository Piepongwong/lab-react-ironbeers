import React from 'react'; 
import Header from "../components/Header";
import {getUser} from "../utils/auth"; 

export default function Profile() {
    let user = getUser();
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 d-flex justify-content-center offset-lg-3">
                        <h3>{user.username}</h3>
                    </div>
                    <div className="col-md-12 col-lg-6 d-flex justify-content-center offset-lg-3">
                        <p><span>{user.firstname}</span><span> {user.lastname}</span></p>
                    </div>
                    <div className="col-md-12 col-lg-6 offset-lg-3">
                        <h4>{user.email}</h4>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

