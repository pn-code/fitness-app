const User = require("../models/User");
require("dotenv").config();

const updateUserMeasurements = async (req, res) => {
    const { userId } = req.params;
    const { weights, calorieGoal } = req.body;

    if (req.user === userId) {
        if (weights && calorieGoal) {
            const updateUser = await User.findByIdAndUpdate(userId, {
                weights,
                calorieGoal,
            });

            res.status(202).json({
                success: true,
                weights,
                calorieGoal,
            });
        } else if (weights) {
            const updateUser = await User.findByIdAndUpdate(userId, {
                weights,
            });

            res.status(202).json({
                success: true,
                weights,
            });
        } else if (calorieGoal) {
            const updateUser = await User.findByIdAndUpdate(userId, {
                calorieGoal,
            });
            res.status(202).json({
                success: true,
                calorieGoal,
            });
        }
    }
};

module.exports = { updateUserMeasurements };
