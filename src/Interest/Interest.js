import React from 'react';
import * as intjson from "./Interest.json";

const interest = () => {
    const interestlist = intjson[0].listInterest

    return (
        <div className="boxStuff">
            {interestlist.map(function (int) {
                return (
                    <div className="experience">
                        <h1 className="interestTitle">{int.title}</h1>
                        <p className="interestDescription">{int.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default interest