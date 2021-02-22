import React from 'react';
import "../card/ItemCard.css";
import {useDispatch, useSelector} from "react-redux";
import uuid from "react-uuid";
import {useFormik} from 'formik';
import {patchProcessing} from "../../store/form/actions";
import {useInjectSaga} from "../../store/injectSaga";
import productsFormSaga from "../../store/form/saga";


function EditItemForm({item, onClose}) {
    useInjectSaga('productsFormSaga', productsFormSaga)
    const origins = useSelector(state => state.filterReducer.origin)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: item.name,
            price: item.price,
            origin: item.origin
        },
        onSubmit: (values) => {
            dispatch(patchProcessing({
                        data: JSON.stringify({product: {...values}}),
                        id: item.id
            }))
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

    const handlerReset = () => {
        formik.setValues({
            name: '',
            price: '',
            origin: '',
        })
    }

    return (
        <>
            <span className="close-modal" onClick={onClose}>&#10005;</span>
            <form className="form" onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name"/>Name
                    <input name="name"
                           type="text"
                           id="name"
                           className="form-input"
                           onChange={formik.handleChange}
                           value={formik.values.name}
                           autoFocus/>
                    {formik.touched.name && formik.errors.name ?
                        <div className="error">{formik.errors.name}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="price"/>Price
                    <input name="price"
                           type="number"
                           id="price"
                           className="form-input"
                           onChange={formik.handleChange}
                           value={formik.values.price}/>
                    {formik.touched.price && formik.errors.price ?
                        <div className="error">{formik.errors.price}</div> : null}
                </div>
                <div className="selector">
                    <p>Origin: </p>
                    <select name="origin"
                            onChange={formik.handleChange}
                            value={formik.values.origin}>
                        {origins.map(origin => <option value={origin.value} key={uuid()}>{origin.displayName}</option>)}
                    </select>
                </div>
                <div className="buttons">
                    <button type="submit">Save</button>
                    <button type="reset" onClick={handlerReset}>Clear fields</button>
                </div>
            </form>
        </>
    )
}

export default EditItemForm;