import { createStore, combineReducers } from 'redux';
import calculatorReducer from './Calculator/Calculator.reducer';
import productsReducer from './Products/Products.reducer';

// Redux persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: productsReducer,
});

// Persistindo dados dos reducers com redux persist
const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);


/* Reducer - É uma função q/ retorna um estado (no caso do da
    propriedade "calculator" da contante rootReducer..ela vai receber um estado
    do reducer referente a calculadora - Entidade Calculator)
 
    combineReducers -> É um método do redux que vai criar um objeto contentendo
    o valor de retorno dos reducers estabelecidos (ex: conterá o valor de retorno 
    do reducer calculator).

    createStore -> Uma store é criada com base nos reducers combinados
*/
