export const getItems = state => state.pagesReducer.pages
export const getFilter = state => state.pagesReducer


export const getPages = state => {
    const pages = getItems(state)
    const page = []
    for(let i = 1; i <= pages; i++) {
        page.push("" + i)
    }
    return page
}

