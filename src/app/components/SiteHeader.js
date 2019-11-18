import React from 'react';
import Nav from './Nav';

const SiteHeader = (props) => {
    return (
        <div className="site-header">
            <div className="site-title">
                [ <span className="white">Simon's Blog</span> ]
            </div>
            <Nav />
        </div>
    )
}

export default SiteHeader;