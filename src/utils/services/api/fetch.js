export const fetchItems = async () => {
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products`)
    return response.json()
}

export const fetchItem = async (location) => {
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products${location.pathname}`)
    return response.json()
}

