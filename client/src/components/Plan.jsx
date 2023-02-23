import { useState } from "react";
import { Link } from "react-router-dom";
import {
    AiOutlineLike,
    AiFillLike,
    AiOutlineStar,
    AiFillStar,
} from "react-icons/ai";

const Plan = ({ user, plan, deletePlan, editPlan }) => {
    const [view, setView] = useState(false);

    const [isCurrentUserLiked, setIsCurrentUserLike] = useState(
        plan.likes.includes(user._id)
    );

    const [isCurrentUserSaved, setIsCurrentUserSaved] = useState(
        plan.saved.includes(user._id)
    );

    const handleView = () => {
        setView((view) => !view);
    };

    return (
        // Show this when view is false...
        <div className="bg-slate-700 px-6 py-3 rounded-md">
            <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold">
                        {plan.title} by{" "}
                        <span className="text-yellow-500 hover:underline cursor-pointer">
                            {plan.user}
                        </span>
                    </h3>

                    <section className="flex gap-4">
                        <div className="relative cursor-pointer">
                            <div className="hover:text-green-400">
                                {!isCurrentUserLiked ? (
                                    <AiFillLike size={32} />
                                ) : (
                                    <AiOutlineLike size={32} />
                                )}
                            </div>

                            <span className="bg-blue-700 px-2 rounded-full absolute -top-2 -right-4">
                                6
                            </span>
                        </div>

                        <div className="relative cursor-pointer">
                            <div className="hover:text-yellow-400">
                                {!isCurrentUserSaved ? (
                                    <AiFillStar size={33} />
                                ) : (
                                    <AiOutlineStar size={33} />
                                )}
                            </div>

                            <span className="bg-blue-700 px-2 rounded-full absolute -top-2 -right-4">
                                6
                            </span>
                        </div>
                    </section>
                </div>

                <div>
                    <h3 className="font-semibold mt-2">Emphasis: </h3>
                    <span>{plan.emphasis}</span>
                </div>

                <h4 className="font-semibold mt-2">Description: </h4>
                <p className="text mb-4">{plan.desc}</p>
                {!view && (
                    <span
                        onClick={handleView}
                        className="text-xs text-center cursor-pointer"
                    >
                        Click to View
                    </span>
                )}
            </div>

            {view && (
                <ul className="flex flex-col gap-1 pb-2">
                    <h4 className="font-semibold">Exercises:</h4>
                    {plan.exercises.map((exercise, idx) => {
                        if (exercise.name !== "") {
                            return (
                                <li key={idx}>
                                    <div className="flex justify-between">
                                        <h4>{exercise.name}</h4>
                                        <p>{`${exercise.sets} x ${exercise.reps}`}</p>
                                    </div>
                                </li>
                            );
                        }
                    })}
                </ul>
            )}

            {view && (
                <div className="flex flex-col">
                    {plan.userId === user._id && (
                        <div className="flex justify-between gap-[12%]">
                            <Link
                                className="flex-1 bg-green-600 rounded-md mt-4 py-3 hover:bg-green-400 text-center"
                                to={`/edit-plans/${plan._id}`}
                                state={plan}
                            >
                                Edit
                            </Link>
                            <button
                                className="flex-1 bg-red-500 rounded-md mt-4 py-3 hover:bg-red-400"
                                onClick={() =>
                                    deletePlan(plan._id, plan.userId)
                                }
                            >
                                Delete
                            </button>
                        </div>
                    )}
                    <span
                        onClick={handleView}
                        className=" mt-8 text-xs text-center cursor-pointer"
                    >
                        Click to Close
                    </span>
                </div>
            )}
        </div>
    );
};

export default Plan;
