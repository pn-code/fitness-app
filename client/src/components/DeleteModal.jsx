const DeleteModal = ({ action, closeModal }) => {
    return (
        <div className="fixed left-0 top-0 bg-gray-700/90 w-[100%] h-[100vh] flex flex-col justify-center items-center z-[9999]">
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
