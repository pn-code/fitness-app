import React from "react";

const DeleteModal = ({ action, closeModal }) => {
    return (
        <div className="absolute left-0 right-0 top-[30%] bottom-0 m-auto w-[300px] z-[999]">
            <form
                onSubmit={action}
                className="bg-slate-900 text-white p-12 rounded-md"
            >
                <h1 className="mb-2">
                    Are you sure you want to delete this plan/entry?
                </h1>
                <section className="flex flex-col justify-between sm:gap-12 sm:flex-row">
                    <button
                        onClick={closeModal}
                        type="button"
                        className="btn-blue bg-gray-500"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn-blue bg-red-600">
                        Delete
                    </button>
                </section>
            </form>
        </div>
    );
};

export default DeleteModal;
