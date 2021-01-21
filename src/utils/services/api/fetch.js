export const fetchItems = async (currentPage, perPage, filter) => {
    let origin = []
    filter.origin.map(item => {
        if (item.isChecked) {
            origin.push(item.value)
        }
    })
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products?page=${currentPage}&perPage=${perPage}&origins=${origin.join()}&minPrice=${filter.price.minPrice}&maxPrice=${filter.price.maxPrice}`)
    return response.json()
}

export const fetchItem = async (location) => {
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products${location.pathname}`)
    return response.json()
}

export const fetchOrigins = async () => {
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products-origins`)
    return response.json()
}