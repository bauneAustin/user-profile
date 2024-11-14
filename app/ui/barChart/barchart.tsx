'use client'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const BarChart = () => {
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {stepSize: 1},
                title: {
                    display: true,
                    text: 'Number of Posts'
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Type of Post'
                },
            }
        },
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
        },
    };

    const labels = ['JS', 'CSS', 'Personal', 'Total'];
    const data = {
        labels,
        base: 1,
        datasets: [
            {
                label: 'Post Amount by Type',
                data: [2, 1, 1, 4],
                backgroundColor: ['#85c6ff', '#c1e4b2', '#faf38e'],
                borderColor: ['#2280ff', '#42812f', '#bd8d0a'],
            },
        ],
    };

    return (
        <div className='flex flex-col h-full mr-2'>
            <div className='flex flex-row text-2xl text-main-950 mt-14 mb-8'>
                Posts Breakdown
            </div>
            <div className='h-96'>
                <Bar height={'h-96'} options={options} data={data} />
            </div>
        </div>
    );
};

export default BarChart;
