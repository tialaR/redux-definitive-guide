/*
    --- Reducer ---
    -> Tem como função receber os dados das ações e retornar o novo estado da store
    -> É uma função que retorna um estado
    -> Toda vez que uma action é disparada, de algum lugar da aplicação, ela vai ser 
    retornada para o reducer. Ou seja, a cada modificação no estado da aplicação o método
    reducer vai ser executado.
    -> o REDUCER precisa retornar o novo estado da aplicação
    -> O novo estado da aplicação vai ser retornado com base no tipo da ação recebida. Por isso
    que a ação tem um tipo, para diferênciar a lógica q/ deve ser aplicada no momento
    da alteração do estado da aplicação
    -> Como a ação pode ter vários tipos SWITCHS devem ser criados para estabelecer qual
    lógica deve ser aplicada.
*/

// O Reducer retorna o novo estado para o data store da aplicação
// Esse estado é alterado através das actions
// Os componetes reagem as alterações do estado de diversas formas

const INITIAL_STATE = 0;

/* Reducer - É uma função q/ retorna um estado (nesse caso retorna um estado
    referente a calculadora - Entidade Calculator) */
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SUM': 
            return action.payload[0] + action.payload[1];
        case 'SUBTRACT':
            return action.payload[0] - action.payload[1];
        default:
            return state;
    }
}
/*
     state -> O state que vem como parâmetro se refere ao estado atual da aplicação
     -> Devo passar o initial state para o state p/ q/ o mesmo não começe com o valor
     undefined.
*/
