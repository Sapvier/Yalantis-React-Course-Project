import React from 'react';
import "./SideBar.css";


function Origin({origin, changeHandler, originsArray}) {

    if (origin.isChecked) {
        return (
            <div>
                <input type="checkbox" onChange={() => changeHandler(origin, originsArray)} defaultChecked/>
                <div className="originName">{origin.displayName}</div>
            </div>
        )
    } else return (
        <div>
            <input type="checkbox" onChange={() => changeHandler(origin, originsArray)}/>
            <div className="originName">{origin.displayName}</div>
        </div>
    )
}


export default Origin;

