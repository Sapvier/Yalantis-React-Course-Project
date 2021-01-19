import React, {useState} from 'react';
import "../common/SideBar.css";
import {addOrigin, removeOrigin} from "../../store/origins/actions";


function Origin ({origin}) {
    const [checked, setChecked] = useState(false)

    // const clickHandler1 = (e) => {
    //         dispatch(removeOrigin(origin.value))
    //         dispatch(addOrigin(origin.value))
    //         setChecked(!e.target.checked)
    //     console.log(checked)
    //
    // }
    // const clickHandler2 = (e) => {
    //         setChecked(!e.target.checked)
    //         dispatch(removeOrigin(origin.value))
    //         console.log(checked)
    // }
    const changeHandler = (e) => {
        if (e.target.checked) {
            removeOrigin(origin.value)
            addOrigin(origin.value)
            console.log("added")
            setChecked(state => !state)
        }
        else {
            removeOrigin(origin.value)
            setChecked(state => !state)
            console.log("removed")
        }
    }

    if (checked) {
        return (
            <div>
                <input type="checkbox" onChange={changeHandler} defaultChecked/>
                <div className="originName" onClick={() => console.log(checked)}>{origin.displayName}</div>
            </div>
        )
    } else return (
            <div>
                <input type="checkbox" onChange={changeHandler}/>
                <div className="originName" onClick={() => console.log(checked)}>{origin.displayName}</div>
            </div>
    )
}

export default Origin;
