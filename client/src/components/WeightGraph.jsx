import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const WeightGraph = ({ weightData }) => {
    const weights = weightData.map((data) => Number(data.pounds));
    const dates = weightData.map((data) => data.date.substring(5, 10));

    const data = {
        labels: [...dates],
        datasets: [
            {
                fill: true,
                label: "Weight (lbs)",
                data: [...weights],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    return (
        <div className="w-full sm:max-w-[72%]">
            <h2 className="font-bold sm:text-center sm:text-2xl">Weight Over Time</h2>
            <Line data={data} />
        </div>
    );
};

export default WeightGraph;
