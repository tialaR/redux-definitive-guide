import productsMock from '../../mocks/products.json';

const INITIAL_STATE = productsMock.products;

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'TOGGLE_PRODUCT':
            /* Criando uma nova lista de products (remapeando a lista de products 
                alterando a propriedade checked de cada produto caso necessário) */
            return state.map(product => 
                product.id === action.payload 
                ? { ...product, checked: !product.checked } 
                : product
            )
        default:
            return state;
    }
}