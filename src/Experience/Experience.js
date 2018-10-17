import React from 'react';
import * as expjson from "./experience.json";
import '../middlePart.css';

const experience = () => {
    const explist = expjson[0].listExperience

    return (
        <div className="boxStuff">
            {explist.map(function (exp){
                var tasks = exp.missions
                return (
                    <div className="experience">
                        <h1 className="listTitle">{exp.description}</h1>
                        <h2 className="listSubtitle">{exp.date}</h2>
                        <h2 className="listSubtitle">{exp.place}</h2>
                        {tasks.map(function (d) { return <li className="tasksList">{d.task}</li>})}
                    </div>
                )
            })}
        </div>
    )
}

export default experience