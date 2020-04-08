import React from "react";
import {getUser} from "../utils/auth";
import "./styling/Profile.css"

const Profile = () => {
    let user = getUser();
    console.log(user)
    return (
        <div className="profile">
            <h1>Welcome to your profile page {user.username}</h1>
            <iframe src="https://giphy.com/embed/mCbUi0FyYhHHhutEV8" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
    )
}

export default Profile;