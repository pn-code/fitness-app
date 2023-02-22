const Plan = require("../models/Plan");

const getAllPlans = async (req, res, next) => {
    if (req.user) {
        const plans = await Plan.find();
        res.json({ plans });
    }
};

const getUserPlans = async (req, res, next) => {
    if (req.params.userId) {
        const plans = await Plan.find({ userId: req.params.userId });
        res.json({ plans });
    }
};

const postPlan = async (req, res, next) => {
    if (req.body.userId) {
        const plan = await Plan.create(req.body);
        res.json({ status: "Success", plan });
    }
};

const deletePlan = async (req, res) => {
    const { userId, planUserId, currentPlanId } = req.body;

    if (userId == planUserId) {
        try {
            const plan = await Plan.findByIdAndDelete(currentPlanId);
            res.json({
                status: "Successful",
                plan,
            });
        } catch (err) {
            res.sendStatus(500);
        }
    }
};

const updatePlan = async (req, res) => {
    const { userId } = req.body;
    const { planId } = req.params;

    if (req.user === userId) {
        try {
            const plan = await Plan.findByIdAndUpdate(planId, req.body);
            res.json({
                status: "Successful",
                plan,
            });
        } catch (err) {
            res.sendStatus(500);
        }
    }
};

module.exports = { getAllPlans, getUserPlans, postPlan, deletePlan, updatePlan };
