export const postItem = async (item) => await fetch('https://yalantis-react-school-api.yalantis.com/api/v1/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCW0LXQu9C10LfQvdC40Lkg0JTQtdC90LjRgSIsImlhdCI6MTYxMTE3NDA0MiwiZXhwIjoxNjE2MzU4MDQyfQ.Ou4KHwLGV2IC1W4keq9toJjbsNaRfI2WkEc3NetnDmY',
    },
    body: JSON.stringify(item)
});

export const postOrder = async (products) => {
    let cart = []
    products.map(item =>
        cart.push({
            productId: item.id,
            count: item.quantity
        }))
    console.log(cart)

    await fetch('https://yalantis-react-school-api.yalantis.com/api/v1/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCW0LXQu9C10LfQvdC40Lkg0JTQtdC90LjRgSIsImlhdCI6MTYxMTE3NDA0MiwiZXhwIjoxNjE2MzU4MDQyfQ.Ou4KHwLGV2IC1W4keq9toJjbsNaRfI2WkEc3NetnDmY',
        },
        body: JSON.stringify({
            order: {
                pieces: [...cart]
            }
        })
    });
}

