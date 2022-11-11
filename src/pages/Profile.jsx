import "../styles/profile.css";

const Profile = () => {
    return (
        <div className="container">
            <div className="Profile">
                <header>
                    <h1>Profile</h1>
                </header>
                <main>
                    <nav className="profile-nav">
                        <button>
                            Analytics
                        </button>
                        <button>Send Feedback</button>
                        <button>Log Out</button>
                    </nav>
                </main>
            </div>
        </div>
    );
};

export default Profile;
