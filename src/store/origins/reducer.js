const initialState = {
    price: {
        minPrice: 1,
        maxPrice: null
    },
    origin: []
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "ADD_ORIGIN": {
            return {...state, origin: state.origin.concat(action.payload)}
        }
        case "REMOVE_ORIGIN": {
            return {...state, origin: state.origin.filter(item => item !== action.payload)}
        }
        case "CHECK_ORIGIN": {
            return {...state, origin: state.origin.concat(action.payload)}
        }
        case "UNCHECK_ORIGIN": {
            return {...state, origin: state.origin.concat(action.payload)}
        }
        case "SET_MINPRICE": {
            return {...state, price: {...state.price, minPrice: action.payload}}
        }
        case "SET_MAXPRICE": {
            return {...state, price: {...state.price, maxPrice: action.payload}}
        }
    }
}