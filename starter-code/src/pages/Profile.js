import React from "react";
import {getUser} from "../utils/auth";

const Profile = () => {
    let user = getUser();
    console.log(user)
    return (
        <div>
            <h1>Welcome to your profile page {user.username}</h1>
        </div>
    )
}

export default Profile;