import React from "react";

const DeleteModal = ({ action }) => {
    return (
        <div className="w-[460px] h-full relative">
            <form className="bg-slate-700 text-white p-12 absolute top-[50%] left-[50%] rounded-md w-full">
                <h1 className="mb-2">
                    Are you sure you want to delete this plan/entry?
                </h1>
                <section className="flex justify-between gap-12">
                    <button className="btn-blue bg-gray-500">Cancel</button>
                    <button className="btn-blue bg-red-600">Delete</button>
                </section>
            </form>
        </div>
    );
};

export default DeleteModal;
