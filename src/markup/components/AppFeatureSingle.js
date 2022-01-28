import React from 'react';

import { Link } from 'react-router-dom';

const AppFeatureSingle = ({ icon, heading, excerpt, link = '/', containerClass }) => {
    return (
        <div className={`app-feature-single ${containerClass}`}>
            <div className="app-feature-single-wrapper">
                <Link to={link} className="icon">
                    <i className={icon}></i>
                </Link>
                <Link to={link}>
                    <h3 className="c-dark">{heading}</h3>
                </Link>
                <p className="c-grey">{excerpt}</p>
            </div>

        </div>
    );
};

export default AppFeatureSingle;
