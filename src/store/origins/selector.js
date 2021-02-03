
export const getOrigins = state => state.filterReducer.origin

function compare( a, b ) {
    if ( a.value < b.value ){
        return -1;
    }
    if ( a.value > b.value ){
        return 1;
    }
    return 0;
}

export const getSortedOrigins = state => {
    const origins = getOrigins(state)
    return origins.sort( compare );
}