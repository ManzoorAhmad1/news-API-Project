import React from 'react';

const LoaderBar = ({ progress }) => {
    return (
        <div className="loader">
            <div className="loader-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default LoaderBar;
