import {
    FORM_PATCH_ERROR,
    FORM_PATCH_PROCESSING,
    FORM_PATCH_SUCCESS,
    FORM_POST_ERROR,
    FORM_POST_PROCESSING,
    FORM_POST_SUCCESS
} from "./types";

export const patchSuccess = () => {
    return {
        type: FORM_PATCH_SUCCESS
    }
}
export const postSuccess = () => {
    return {
        type: FORM_POST_SUCCESS
    }
}
export const patchError = () => {
    return {
        type: FORM_PATCH_ERROR
    }
}
export const postError = () => {
    return {
        type: FORM_POST_ERROR
    }
}
export const postProcessing = (payload) => {
    return {
        type: FORM_POST_PROCESSING,
        payload: payload
    }
}
export const patchProcessing = (payload) => {
    return {
        type: FORM_PATCH_PROCESSING,
        payload: payload
    }
}


