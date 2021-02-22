import React, {useCallback} from 'react';
import ItemCard from "../card/ItemCard";
import "./ItemsList.css";
import {useHistory} from "react-router-dom";
import {addToCart} from "../../store/cart/actions";
import {useDispatch} from "react-redux";
import {useInjectSaga} from "../../store/injectSaga";
import cartSaga from "../../store/cart/saga";


function ItemsList({products}) {
    useInjectSaga('cartSaga', cartSaga)
    const history = useHistory();
    const dispatch = useDispatch()
    const handleClick = useCallback((id) => {
        return history.push(`/products/${id}`)
    }, []);

    const handleAddClick = useCallback((item) => {
        return dispatch(addToCart(item))
    }, []);

    return (
        <div className="items-container">
            {products.length > 0 && products
                .map(product => <ItemCard
                    item={product}
                    key={product.id}
                    handleClick={handleClick}
                    handleAddClick={handleAddClick}/>)}
        </div>
    );
}

export default ItemsList;