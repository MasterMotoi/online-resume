import React from 'react';
import * as schjson from "./School.json";

const school = () => {
    const schoollist = schjson[0].listSchool

    return (
        <div className="boxStuff">
            {schoollist.map(function (sch) {
                var lesson = sch.course
                return (
                    <div className="experience">
                        <h1 className="listTitle">{sch.description}</h1>
                        <h2 className="listSubtitle">{sch.date}</h2>
                        <h2 className="listSubtitle">{sch.place}</h2>
                        {lesson.map(function (d) { return <li className="tasksList">{d.lesson}</li> })}
                    </div>
                )
            })}
        </div>
    )
}

export default school