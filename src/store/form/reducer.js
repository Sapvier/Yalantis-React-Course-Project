const initialState = {
    patchStatus: "pending",
    postStatus: "pending"
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "PATCH_SUCCESS": {
            return {...state, patchStatus: "success"}
        }
        case "PATCH_ERROR": {
            return {...state, patchStatus: "error"}
        }
        case "POST_SUCCESS": {
            return {...state, postStatus: "success"}
        }
        case "POST_ERROR": {
            return {...state, postStatus: "error"}
        }
        case "POST_PROCESSING": {
            return {...state, postStatus: "processing"}
        }
        case "PATCH_PROCESSING": {
            return {...state, postStatus: "processing"}
        }
    }
}