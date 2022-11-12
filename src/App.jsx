import React from "react";
import { googleLogin, googleLogout } from "./components/Auth";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import MyPlans from "./pages/MyPlans";
import Calculator from "./pages/Calculator";
import Journal from "./pages/Journal";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { auth } from "./utility/firebase";

const App = () => {

    const [user, setUser] = React.useState(null)

    // Checks Auth State
    onAuthStateChanged(auth, (user = auth.currentUser) => {
        setUser(auth.currentUser)
    })

    const [savedPlans, setSavedPlans] = React.useState([]);

    const savePlan = (plan) => {
        setSavedPlans((prevSavedPlans) => [plan, ...prevSavedPlans]);
    };

    return (
        <div className="App">
            <Navbar signIn={googleLogin} />
            <Routes>
                <Route path="/fitness-app/" element={<Home />} />
                <Route
                    path="/fitness-app/calculator"
                    element={<Calculator />}
                />
                <Route
                    path="/fitness-app/planner"
                    element={
                        <Planner
                            savedPlans={savedPlans}
                            savePlan={(plan) => savePlan(plan)}
                        />
                    }
                />
                <Route
                    path="/fitness-app/journal"
                    element={<Journal savedPlans={savedPlans} />}
                />
                <Route
                    path="/fitness-app/profile"
                    element={<Profile signOut={googleLogout} user={user}/>}
                />
                <Route
                    path="/fitness-app/my-plans"
                    element={<MyPlans savedPlans={savedPlans} />}
                />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
