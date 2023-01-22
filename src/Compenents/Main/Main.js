import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <p>this main</p>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;