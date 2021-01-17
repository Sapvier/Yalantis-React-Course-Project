import {SAVE_PRODUCTS} from "./types"


export function saveProducts(products) {
    return {
        type: "SAVE_PRODUCTS",
        payload: products
    }
}