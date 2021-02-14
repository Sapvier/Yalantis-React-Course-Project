import {
    PRODUCTS_FETCH_ERROR,
    PRODUCTS_FETCH_LOADING,
    PRODUCTS_FETCH_SUCCESS,
    PRODUCTS_SAVE_PRODUCTS,
    PRODUCTS_UPDATE_ITEM
} from "./types";

export const saveProducts =(payload) => ({type: PRODUCTS_SAVE_PRODUCTS, payload})

export const updateItem =(payload) => ({type: PRODUCTS_UPDATE_ITEM, payload})

export const fetchLoading =(payload) => ({type: PRODUCTS_FETCH_LOADING, payload})

export const fetchSuccess =() => ({type: PRODUCTS_FETCH_SUCCESS})

export const fetchError =() => ({type: PRODUCTS_FETCH_ERROR})
