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
import { ListRowItem } from '../scrollableLIst/listRow';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const BarChart = (props: {posts: ListRowItem[]}) => {
    const {posts} = props;
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

    const postCount = posts.reduce((accum, current ) => {
        accum[current.type] += 1;
        accum.Total += 1;
        return accum;
    }, {
        CSS: 0,
        JS: 0,
        Personal: 0,
        Total: 0
    });

    const labels = ['CSS', 'JS', 'Personal', 'Total'];
    const data = {
        labels,
        base: 1,
        datasets: [
            {
                label: 'Post Amount by Type',
                data: [postCount.CSS, postCount.JS, postCount.Personal, postCount.Total],
                backgroundColor: ['#c1e4b2', '#85c6ff', '#faf38e'],
                borderColor: ['#42812f', '#2280ff', '#bd8d0a'],
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
