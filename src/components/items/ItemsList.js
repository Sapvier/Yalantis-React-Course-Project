import React, {useCallback} from 'react';
import ItemCard from "../card/ItemCard";
import "./ItemsList.css";
import {useHistory} from "react-router-dom";
import {addToCart} from "../../store/cart/actions";
import {useDispatch, useSelector} from "react-redux";


function ItemsList({products}) {
    const history = useHistory();
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartReducer.items)
    const handleClick = useCallback((id) => {
        return history.push(`/products/${id}`)
    }, []);

    const handleAddClick = useCallback((item) => {
        return dispatch(addToCart(cartItems, item))
    }, []);

    return (
        <div className="itemsContainer">
            {products.length > 0 && products.map(product => <ItemCard item={product}
                                                                      key={product.id}
                                                                      handleClick={handleClick}
                                                                      handleAddClick={handleAddClick}/>)}
        </div>
    );
}

export default ItemsList;