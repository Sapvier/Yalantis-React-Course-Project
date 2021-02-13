export const getItems = state => state.pagesReducer.pages
export const getPerPage = state => state.pagesReducer.perPage
export const getFilter = state => state.pagesReducer
export const getCurrentPage = state => state.pagesReducer.currentPage


export const getPages = state => {
    const pages = getItems(state)
    const page = []
    for(let i = 1; i <= pages; i++) {
        page.push("" + i)
    }
    return page
}

