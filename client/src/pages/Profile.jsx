import React from "react";
import "../styles/profile.css";
import axios from "axios";

const Profile = (props) => {

    const { user, setUser } = props

    const handleLogOut = async () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: 'http://localhost:3000/log-out'
        }).then(res => setUser(res.data))
        window.location.reload(true);
    }

    return (
        <div className="container">
            <div className="Profile">
                <header>
                    <h2 className="page-header">Profile</h2>
                </header>
                <main>
                    <nav className="profile-nav">
                        <button>Analytics</button>
                        <button>Send Feedback</button>
                        <button onClick={handleLogOut}>Log Out</button>
                    </nav>
                </main>
            </div>
        </div>
    );
};

export default Profile;
