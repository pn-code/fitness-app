import React from "react";
import { googleLogin, googleLogout } from "./components/Auth";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import MyPlans from "./pages/MyPlans";
import Calculator from "./pages/Calculator";
import Journal from "./pages/Journal";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { auth } from "./utility/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./utility/firebase";

const App = () => {
    // User Information
    const [user, setUser] = React.useState(null);
    const [userData, setUserData] = React.useState({});
    const [fetchData, setFetchData] = React.useState(true);

    // Checks Auth State
    onAuthStateChanged(auth, (user = auth.currentUser) => {
        setUser(auth.currentUser);
    });

    // Initializes Database
    React.useEffect(() => {
        if (user && fetchData) {
            const initializeData = async () => {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                } else {
                    await setDoc(
                        doc(db, "users", user.uid),
                        {
                            plans: [],
                            journal: [],
                        },
                        { merge: true }
                    );
                }
            };
            initializeData();
            setFetchData(false);
        }
    }, [user, fetchData]);

    return (
        <div className="App">
            <Navbar signIn={googleLogin} />
            <Routes>
                <Route path="/fitness-app/" element={<Home user={user}/>} />
                <Route
                    path="/fitness-app/calculator"
                    element={<Calculator />}
                />
                <Route
                    path="/fitness-app/journal"
                    element={<Journal user={user} userData={userData} setFetchData={setFetchData}/>}
                />
                <Route
                    path="/fitness-app/profile"
                    element={
                        <Profile
                            signOut={googleLogout}
                            user={user}
                            userData={userData}
                        />
                    }
                />
                <Route
                    path="/fitness-app/my-plans"
                    element={<MyPlans user={user} userData={userData} setFetchData={setFetchData}/>}
                />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
