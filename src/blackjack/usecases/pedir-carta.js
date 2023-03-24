// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck - Ejemplo ['a','9','b']
 * @returns {String} - retorna una carta del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}