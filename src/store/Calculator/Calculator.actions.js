/* 
    --- Action Creator ---
    -> Uma ação é algo disparado pelo componente 
    -> A responsabilidade da ação é retornar um objeto com um tipo e um payload (sendo q o payload é opcional)
    -> Uma Action Creator é função que retorna uma ação       
    -> Através dela podemos passar parametros p/ a ação quando chamada pelo componente 
    -> payload -> É como se fossem parâmetros retornados pela ação (são dados retornados pela action)
*/

export function sum(a, b) {
    return {
        type: 'SUM',
        payload: [a, b],
    }
};

export function subtract(a, b) {
    return {
        type: 'SUBTRACT',
        payload: [a, b],
    }
};
