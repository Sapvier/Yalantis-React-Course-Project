const initialState = {
    pages: null,
    perPage: 25,
    currentPage: 1
}

export const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "SAVE_PAGES": {
            return {...state, pages: action.payload}
        }
        case "SET_PAGE": {
            return {...state, currentPage: action.payload}
        }
        case "SET_PAGELIMIT": {
            return {...state, perPage: action.payload, currentPage: 1}
        }
    }
}