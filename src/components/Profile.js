import React from "react";
import "../css/Profile.css"

function Profile(){
    return(
        <div className="dropdown-profile">
            <h3>Hello User</h3>
            <p>To access your Meesho account</p>
            <button>Sign Up</button>
            <div className="profile-row-separator"></div>
            <h4>My Orders</h4>

        </div>

    );
}
export default Profile;