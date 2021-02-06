import {PATCH_ERROR, PATCH_PROCESSING, PATCH_SUCCESS, POST_ERROR, POST_PROCESSING, POST_SUCCESS} from "./types";

export const patchSuccess = () => {
    return {
        type: PATCH_SUCCESS
    }
}
export const postSuccess = () => {
    return {
        type: POST_SUCCESS
    }
}
export const patchError = () => {
    return {
        type: PATCH_ERROR
    }
}
export const postError = () => {
    return {
        type: POST_ERROR
    }
}
export const postProcessing = () => {
    return {
        type: POST_PROCESSING
    }
}
export const patchProcessing = () => {
    return {
        type: PATCH_PROCESSING
    }
}


