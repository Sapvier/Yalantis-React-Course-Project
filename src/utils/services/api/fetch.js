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


