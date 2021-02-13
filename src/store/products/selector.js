export const getFilter = state => state.filterReducer
export const paginationPage = state => state.pagesReducer.currentPage
export const paginationPerPage = state => state.pagesReducer.perPage
export const getMinPrice = state => state.filterReducer.price.minPrice
export const getMaxPrice = state => state.filterReducer.price.maxPrice
export const getProducts = state => state.productsReducer.products


export const filter = state => {
    const filterArray = getFilter(state)
    const currentPage = paginationPage(state)
    const perPage = paginationPerPage(state)
    const minPrice = getMinPrice(state)
    const maxPrice = getMaxPrice(state)

    let origin = []
    filterArray.origin.map(item => {
        if (item.isChecked) {
            origin.push(item.value)
        }
    })
    return {
        origin: origin.join(),
        currentPage,
        perPage,
        minPrice,
        maxPrice
    }
}