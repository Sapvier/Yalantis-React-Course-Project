import React from 'react';
import "../header/NavBar.css";
import {useDispatch, useSelector} from "react-redux";
import uuid from "react-uuid";
import {useFormik} from 'formik'
import {postItem} from "../../utils/services/api/post";
import {postError, postProcessing, postSuccess} from "../../store/form/actions";
import StatusMessage from "./AddItemStatusMessage";


function AddItemForm() {
    const status = useSelector(state => state.formReducer.postStatus)
    const origins = useSelector(state => state.filterReducer.origin)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            origin: 'africa',
        },
        onSubmit: values => {
            dispatch(postProcessing())
            postItem({product: {...values}}).then(r => dispatch(postSuccess())).catch(e => dispatch(postError()))
        },
        validate: values => {
            let errors = {}
            if(values.name.length < 3) {
                errors.name = "The name should be at least 3 symbols long"
            }
            if(values.name.length > 20) {
                errors.name = "The name should be less then 20 symbols long"
            }
            if(!values.name) {
                errors.name = "The name field can't be empty"
            }
            if(values.price < 0) {
                errors.price = "The price is invalid"
            }
            if(!values.price) {
                errors.price = "The price field can't be empty"
            }
            return errors
        }
    });
    console.log(formik.values)

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <div className="formControl">
                <label htmlFor="name"/>Name
                <input name="name"
                       type="text"
                       id="name"
                       className="formInput"
                       onChange={formik.handleChange}
                       value={formik.values.name}/>
                {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
            </div>
            <div className="formControl">
                <label htmlFor="price"/>Price
                <input name="price"
                       type="number"
                       id="price"
                       className="formInput"
                       onChange={formik.handleChange}
                       value={formik.values.price}/>
                {formik.errors.price ? <div className="error">{formik.errors.price}</div> : null}
            </div>
            <div className="selector"> Origin:
                <select name="origin"
                        onChange={formik.handleChange}
                        value={formik.values.origin}>
                    {origins.map(origin => <option value={origin.value} key={uuid()}>{origin.displayName}</option>)}
                </select>
            </div>
            <button className="submitButton" type="submit">Submit</button>
            {status !== 'pending'
                ? <StatusMessage status={status}/>
                : null
            }
        </form>
    )
}

export default AddItemForm;