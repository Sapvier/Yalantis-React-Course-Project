export const patchItem = async (product, id) => await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products/${id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCW0LXQu9C10LfQvdC40Lkg0JTQtdC90LjRgSIsImlhdCI6MTYxMTE3NDA0MiwiZXhwIjoxNjE2MzU4MDQyfQ.Ou4KHwLGV2IC1W4keq9toJjbsNaRfI2WkEc3NetnDmY',
    },
    body: JSON.stringify(product)
});