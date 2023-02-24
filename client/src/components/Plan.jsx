import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import {
    AiOutlineLike,
    AiFillLike,
    AiOutlineStar,
    AiFillStar,
} from "react-icons/ai";
import serverAPI from "../api/serverAPI";

const Plan = ({ user, plan, planAPI, setUserPlans }) => {
    const [likes, setLikes] = useState(plan.likes.length);
    const [saved, setSaved] = useState(plan.saved.length);
    const [loading, setLoading] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const [view, setView] = useState(false);

    const [isCurrentUserLiked, setIsCurrentUserLiked] = useState(
        plan.likes.includes(user._id)
    );
    const [isCurrentUserSaved, setIsCurrentUserSaved] = useState(
        plan.saved.includes(user._id)
    );

    const deletePlan = async (e, planId, planUserId) => {
        e.preventDefault();
        await serverAPI.delete(`/plans/${plan._id}`, {
            data: {
                userId: user._id,
                planUserId: planUserId,
                currentPlanId: planId,
            },
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        });

        setUserPlans((prevUserPlans) =>
            prevUserPlans.filter((plan) => planId !== plan._id)
        );

        setOpenDeleteModal(false);
    };

    const handleUserLike = async () => {
        if (!isCurrentUserLiked && !loading) {
            setLoading(true);
            const addUserLikeToPlan = {
                ...plan,
                likes: [...plan.likes, user._id],
            };
            try {
                await serverAPI.put(`/plans/${plan._id}`, addUserLikeToPlan, {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`,
                    },
                });
                setIsCurrentUserLiked(true);
                setLikes((prevLikes) => prevLikes + 1);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        } else {
            setLoading(true);
            const removeUserLikeFromPlan = {
                ...plan,
                likes: [...plan.likes].filter((userId) => userId !== user._id),
            };
            try {
                await serverAPI.put(
                    `/plans/${plan._id}`,
                    removeUserLikeFromPlan,
                    {
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`,
                        },
                    }
                );
                setIsCurrentUserLiked(false);
                setLikes((prevLikes) => prevLikes - 1);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }
    };

    const handleUserSave = async () => {
        if (!isCurrentUserSaved && !loading) {
            try {
                setLoading(true);
                const addUserSaveToPlan = {
                    ...plan,
                    saved: [...plan.saved, user._id],
                };
                await serverAPI.put(`/plans/${plan._id}`, addUserSaveToPlan, {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`,
                    },
                });
                setIsCurrentUserSaved(true);
                setSaved((prevSaved) => prevSaved + 1);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        } else {
            try {
                setLoading(true);
                const removeUserSaveFromPlan = {
                    ...plan,
                    saved: [...plan.saved].filter(
                        (userId) => userId !== user._id
                    ),
                };
                await serverAPI.put(
                    `/plans/${plan._id}`,
                    removeUserSaveFromPlan,
                    {
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`,
                        },
                    }
                );
                setIsCurrentUserSaved(false);
                setSaved((prevSaved) => prevSaved - 1);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }
    };

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

                    {openDeleteModal && (
                        <DeleteModal
                            action={(e) => deletePlan(e, plan._id, plan.userId)}
                            closeModal={() => setOpenDeleteModal(false)}
                        />
                    )}

                    <section className="flex gap-6">
                        <div className="relative cursor-pointer">
                            <div
                                onClick={handleUserLike}
                                className="hover:text-green-400"
                            >
                                {isCurrentUserLiked ? (
                                    <AiFillLike size={32} />
                                ) : (
                                    <AiOutlineLike size={32} />
                                )}
                            </div>

                            <span className="bg-blue-700 px-2 rounded-full absolute -top-2 -right-4">
                                {likes}
                            </span>
                        </div>

                        <div className="relative cursor-pointer">
                            <div
                                onClick={handleUserSave}
                                className="hover:text-yellow-300"
                            >
                                {isCurrentUserSaved ? (
                                    <AiFillStar size={33} />
                                ) : (
                                    <AiOutlineStar size={33} />
                                )}
                            </div>

                            <span className="bg-blue-700 px-2 rounded-full absolute -top-2 -right-4">
                                {saved}
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
                                onClick={() => setOpenDeleteModal(true)}
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
