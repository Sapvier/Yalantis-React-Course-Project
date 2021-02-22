import {
    FORM_PATCH_ERROR,
    FORM_PATCH_PROCESSING,
    FORM_PATCH_SUCCESS,
    FORM_POST_ERROR,
    FORM_POST_PROCESSING,
    FORM_POST_SUCCESS
} from "./types";

export const patchSuccess = () => ({type: FORM_PATCH_SUCCESS})

export const postSuccess = () => ({type: FORM_POST_SUCCESS})

export const patchError = () => ({type: FORM_PATCH_ERROR})

export const postError = () => ({type: FORM_POST_ERROR})

export const postProcessing = (payload) => ({type: FORM_POST_PROCESSING, payload})

export const patchProcessing = (payload) => ({type: FORM_PATCH_PROCESSING, payload})



