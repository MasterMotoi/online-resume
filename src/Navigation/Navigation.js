import React from 'react';

const navigation = ( props ) => {
    return (
        <div className="navigation">
            <ul>
                <li>Professionnal Experience</li>
                <li onClick={props.click}>Education</li>
                <li>Other interests</li>
            </ul>
        </div>
    )
}

export default navigation