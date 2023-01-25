import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quizes = useLoaderData().data;
    console.log('ppp', quizes);
    return (
        <div className='container mt-4'>
            <h2 className='text-primary'>Statistics</h2>
            <h4 className='text-primary'>Show total quiz for all topics in a chart:</h4>
            <ResponsiveContainer width='90%' height={400}>
                <LineChart data={quizes} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </ResponsiveContainer>

            {/* <ResponsiveContainer width={700} height="80%">
    <AreaChart data={data}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
      <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer> */}
        </div >
    );
};

export default Statistics;