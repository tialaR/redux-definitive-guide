// Retornar todos os produtos da lista mocada
export const selectAllProducts = state => state.products;

/*
--- REMAPEANDO A LISTA DE PRODUTOS SELECIONADOS ---
-> Retornar apenas a lista de produtos selecionados (checked products)
-> Retorna a lista dos produtos "checkados"
-> O filter será refeito toda vez que houver mudança de estado e por isso a lista de 
produtos selecionados se manterá atualizada 
*/
export const selectSelectedProducts = state => state.products.filter(product => product.checked);

/*
--- REMAPEANDO O TOTAL DA SOMA DOS PRODUTOS SELECIONADOS ---
-> Retorna o total da lista de produtos selecionados
-> O valor total se manterá atualizado pois toda vez que houver mudança de estado
tanto o filter quanto o reduce serão executados novamente
*/
export const selectSelectedProductTotalPrice = state => 
    state.products
    .filter(product => product.checked)
    .reduce((a, b) => a + b.price, 0)

