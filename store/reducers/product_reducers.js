import PRODUCTS from '../../data/dummy-data'

const initialState = {
    availableProducts: PRODUCTS,
    userProduct: PRODUCTS.filter(product => product.ownerId === 'u1')
}

export default (state = initialState, action) => {
    return state
}