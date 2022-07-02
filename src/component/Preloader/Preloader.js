import React from 'react';
import './Preloader.css';

const Preloader = () => {
    return (
        <div className='loader mt-16 m-auto'>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <span>Loading...</span>
        </div>
    );
};

export default Preloader;