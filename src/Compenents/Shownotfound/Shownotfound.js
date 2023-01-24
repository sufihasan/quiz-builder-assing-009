import React from 'react';
import { Link } from 'react-router-dom';

const Shownotfound = () => {
    return (
        <div className='container mt-4'>
            <h1>Sorry you are not a valid route</h1>
            <p>Please go to a valid link or <Link to='/'>Home</Link> </p>
        </div>
    );
};

export default Shownotfound;