import React from 'react';
import "./SideBar.css";
import {checkOrigin, removeOrigin, unCheckOrigin} from "../../store/origins/actions";
import {useDispatch} from "react-redux";


function Origin ({origin}) {
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        if (e.target.checked) {
            dispatch(removeOrigin(origin))
            dispatch(checkOrigin(origin))
        }
        else {
            dispatch(removeOrigin(origin))
            dispatch(unCheckOrigin(origin))
        }
    }

    if (origin.isChecked) {
        return (
            <div>
                <input type="checkbox" onChange={changeHandler} defaultChecked/>
                <div className="originName">{origin.displayName}</div>
            </div>
        )
    } else return (
            <div>
                <input type="checkbox" onChange={changeHandler}/>
                <div className="originName">{origin.displayName}</div>
            </div>
    )
}

export default Origin;
