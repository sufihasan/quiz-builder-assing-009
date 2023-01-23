import React from 'react';
import './Header.css'

import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className='d-flex justify-content-between  ps-3 p-2   bg-primary  '>
            <div>
                <h3>Quiz Builder</h3>
            </div>
            <nav >
                <Link className='text-decoration-none hovers  align-middle me-3 fs-5 ' to='/'>Home</Link>
                <Link className='text-decoration-none hovers align-middle me-3 fs-5' to='/topics'>Topics</Link>
                <Link className='text-decoration-none hovers align-middle me-3 fs-5' to='/statistics'>Statistics</Link>
                <Link className='hovers text-decoration-none   align-middle me-3 fs-5 ' to='/blog'>Blog</Link>
            </nav>


        </div>
    );
};

export default Header;