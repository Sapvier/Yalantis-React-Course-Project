import React, {useState} from 'react';
import "../common/SideBar.css";
import {useDispatch} from "react-redux";
import {addOrigin, removeOrigin} from "../../store/origins/actions";


function Origin ({origin}) {
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        if (e.target.checked) {
            dispatch(removeOrigin(origin.value))
            dispatch(addOrigin(origin.value))
        }
        else {
            dispatch(removeOrigin(origin.value))
        }
        setChecked(!checked)
        console.log(checked)
    }

    return (
        <div>
            <input type="checkbox" defaultChecked={checked} onChange={changeHandler}/>
            <div className="originName">{origin.displayName}</div>
        </div>
    )
}

export default Origin;
