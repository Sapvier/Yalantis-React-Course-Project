import React from 'react';
import "./SideBar.css";


function Origin({origin, changeHandler, originsArray}) {
    if (origin.isChecked) {
        return (
            <div className="origin">
                <input type="checkbox" onChange={() => changeHandler(origin, originsArray)} defaultChecked/>
                <div className="origin-name">{origin.displayName}</div>
            </div>
        )
    } else return (
        <div className="origin">
            <input type="checkbox" onChange={() => changeHandler(origin, originsArray)}/>
            <div className="origin-mame">{origin.displayName}</div>
        </div>
    )
}

export default Origin;

