// export const fetchItems = async (currentPage, perPage, filter) => {
//     let origin = []
//     filter.origin.map(item => {
//         if (item.isChecked) {
//             origin.push(item.value)
//         }
//     })
//     const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products?page=${currentPage}&perPage=${perPage}&origins=${origin.join()}&minPrice=${filter.price.minPrice}&maxPrice=${filter.price.maxPrice}`)
//     return response.json()
// }

export const fetchItem = async (location) => {
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1${location}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCW0LXQu9C10LfQvdC40Lkg0JTQtdC90LjRgSIsImlhdCI6MTYxMTE3NDA0MiwiZXhwIjoxNjE2MzU4MDQyfQ.Ou4KHwLGV2IC1W4keq9toJjbsNaRfI2WkEc3NetnDmY',
        },
    })
    return response.json()
}


export const fetchOrigins = async () => {
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products-origins`)
    return response.json()
}
export const fetchItems = async (currentPage, perPage, filter, isEditable) => {
    let origin = []
    filter.origin.map(item => {
        if (item.isChecked) {
            origin.push(item.value)
        }
    })
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products?page=${currentPage}&perPage=${perPage}&origins=${origin.join()}&minPrice=${filter.price.minPrice}&maxPrice=${filter.price.maxPrice}&editable=${isEditable}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCW0LXQu9C10LfQvdC40Lkg0JTQtdC90LjRgSIsImlhdCI6MTYxMTE3NDA0MiwiZXhwIjoxNjE2MzU4MDQyfQ.Ou4KHwLGV2IC1W4keq9toJjbsNaRfI2WkEc3NetnDmY',
        },
    })

    return response.json()
}
export const fetchOrders = async () => {
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/orders`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCW0LXQu9C10LfQvdC40Lkg0JTQtdC90LjRgSIsImlhdCI6MTYxMTE3NDA0MiwiZXhwIjoxNjE2MzU4MDQyfQ.Ou4KHwLGV2IC1W4keq9toJjbsNaRfI2WkEc3NetnDmY',
        },
    })
    return response.json()
}
