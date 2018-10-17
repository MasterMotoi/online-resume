import React from 'react';
import * as jsoninfo from './PersonnalInfo.json';

const info = () => {
    const itSkills = jsoninfo[5].itskills
    const listSkills = itSkills.map((itSkills) => <li>{itSkills.skill}</li>);
    return (
        <div className="info">
            <p><div className="titleInfo">Address : </div>{jsoninfo[0].address}</p>
            <p><div className="titleInfo">Phone : </div>{jsoninfo[1].phone}</p>
            <p><div className="titleInfo">Mail : </div>{jsoninfo[2].mail}</p>
            <p><div className="titleInfo">Birthday : </div>{jsoninfo[3].birthday}</p>
            <p><div className="titleInfo">English level : </div>{jsoninfo[4].english}</p>
            <p><div className="titleInfo">IT Skills : </div>{listSkills}</p>
            <p>{jsoninfo[6].health}</p>
            <p>{jsoninfo[7].drive}</p>
        </div>
    )
}

export default info