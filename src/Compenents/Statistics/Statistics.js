import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quizes = useLoaderData().data;
    console.log('ppp', quizes);
    return (
        <div className='container mt-4'>
            <h2 className='text-primary'>Statistics</h2>
            <h4 className='text-primary'>Show total quiz for all topics in a chart:</h4>
            <LineChart width={600} height={300} data={quizes} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div >
    );
};

export default Statistics;