import React from 'react';
import "../header/NavBar.css";
import {useDispatch, useSelector} from "react-redux";
import uuid from "react-uuid";
import {useFormik} from 'formik'
import {useInjectSaga} from "../../store/injectSaga";
import productsFormSaga from "../../store/form/saga";
import {POST_PROCESSING} from "../../store/form/types";


function AddItemForm({onClose}) {
    useInjectSaga('productsFormSaga', productsFormSaga)
    const origins = useSelector(state => state.filterReducer.origin)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            origin: 'africa',
        },
        onSubmit: values => {
            dispatch({
                type: POST_PROCESSING,
                payload: {path: `/products`, method: 'POST', filter: '', data: JSON.stringify({product: {...values}})}
            })
            onClose()
        },
        validate: values => {
            let errors = {}
            if (values.name.length < 3) {
                errors.name = "The name should be at least 3 symbols long"
            }
            if (values.name.length > 20) {
                errors.name = "The name should be less then 20 symbols long"
            }
            if (!values.name) {
                errors.name = "The name field can't be empty"
            }
            if (values.price < 0) {
                errors.price = "The price is invalid"
            }
            if (!values.price) {
                errors.price = "The price field can't be empty"
            }
            return errors
        }
    });

    return (
        <>
            <span className="closeModal" onClick={onClose}>&#10005;</span>
            <form className="form" onSubmit={formik.handleSubmit}>
                <div className="formControl">
                    <label htmlFor="name"/>Name
                    <input name="name"
                           type="text"
                           id="name"
                           className="formInput"
                           onChange={formik.handleChange}
                           value={formik.values.name}
                           onBlur={formik.handleBlur}
                           autoFocus/>
                    {formik.touched.name && formik.errors.name ?
                        <div className="error">{formik.errors.name}</div> : null}
                </div>
                <div className="formControl">
                    <label htmlFor="price"/>Price
                    <input name="price"
                           type="number"
                           id="price"
                           className="formInput"
                           onChange={formik.handleChange}
                           value={formik.values.price}
                           onBlur={formik.handleBlur}/>
                    {formik.touched.price && formik.errors.price ?
                        <div className="error">{formik.errors.price}</div> : null}
                </div>
                <div className="selector"> Origin:
                    <select name="origin"
                            onChange={formik.handleChange}
                            value={formik.values.origin}>
                        {origins.map(origin => <option value={origin.value} key={uuid()}>{origin.displayName}</option>)}
                    </select>
                </div>
                <button className="submitButton" type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddItemForm;