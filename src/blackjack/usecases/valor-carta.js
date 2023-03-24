/**
 * Obtener el valor de la carta
 * @param {String} carta - ejemplo 'a','9','j'
 * @returns {Number} -retorna un numero entre 2 y 11
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}