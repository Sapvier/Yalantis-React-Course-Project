import {
    FORM_PATCH_ERROR,
    FORM_PATCH_PROCESSING,
    FORM_PATCH_SUCCESS,
    FORM_POST_ERROR,
    FORM_POST_PROCESSING,
    FORM_POST_SUCCESS
} from "./types";


const initialState = {
    patchStatus: "pending",
    postStatus: "pending"
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case FORM_PATCH_SUCCESS: {
            return {...state, patchStatus: "success"}
        }
        case FORM_PATCH_ERROR: {
            return {...state, patchStatus: "error"}
        }
        case FORM_POST_SUCCESS: {
            return {...state, postStatus: "success"}
        }
        case FORM_POST_ERROR: {
            return {...state, postStatus: "error"}
        }
        case FORM_POST_PROCESSING: {
            return {...state, postStatus: "processing"}
        }
        case FORM_PATCH_PROCESSING: {
            return {...state, postStatus: "processing"}
        }
    }
}