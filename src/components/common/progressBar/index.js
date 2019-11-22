import React, { useState, useEffect } from 'react';
//styles
import './progressBar.scss';

const ProgressBar = ({ total, current }) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(100 - ((total - current) / 100));
    }, [])
    return (
        <div className={'progressBar'}>
            <div className={'bar'} style={{ width: `${width}%` }}></div>
        </div>
    );
};

export default ProgressBar;