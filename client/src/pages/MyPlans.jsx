import React from "react";
import { useEffect } from "react";
import Plan from "../components/Plan";
import "../styles/my-plans.css";
import Planner from "../components/Planner";

const MyPlans = (props) => {
  const { user, userData, setFetchData } = props;
  const [savedPlans, setSavedPlans] = React.useState([]);
  const [renderPlanner, setRenderPlanner] = React.useState(false);
  const API = `http://localhost:3000/api/plans`;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setSavedPlans(res.plans));
  }, []);

  // const removePlan = async (e) => {
  //     // Remove from savedEntries via setSavedEntries
  //     setSavedPlans((prevSavedPlans) =>
  //         prevSavedPlans.filter((plan) => plan.id !== e.target.className)
  //     );
  //     // Use setDoc to send data to database
  //     if (user) {
  //         await setDoc(
  //             doc(db, "users", user.uid),
  //             {
  //                 plans: savedPlans.filter(
  //                     (plan) => plan.id !== e.target.className
  //                 ),
  //             },
  //             { merge: true }
  //         );
  //     }
  // };

  console.log(savedPlans)
  const planElements = savedPlans.map((plan) => (
      <Plan plan={plan} key={plan._id} id={plan._id}/>
  ));

  return (
    <div className="container">
      <div className="MyPlans">
        <header>
          <div className="MyPlans--info">
            <h2 className="page-header">
              {!renderPlanner ? `Training Plans` : `Create a Plan`}
            </h2>
            <button
              onClick={() =>
                setRenderPlanner((prevRenderPlanner) => !prevRenderPlanner)
              }
            >
              {!renderPlanner
                ? `Create New Plan`
                : `My Plans: ${savedPlans.length}`}
            </button>
          </div>
        </header>
        {!renderPlanner && (
          <main className="plans--container">
            {savedPlans.length === 0 && (
              <h4>You currently have no training plans.</h4>
            )}
            {planElements}
          </main>
        )}
        {renderPlanner && (
          <Planner setSavedPlans={setSavedPlans}/>
        )}
      </div>
    </div>
  );
};

export default MyPlans;
