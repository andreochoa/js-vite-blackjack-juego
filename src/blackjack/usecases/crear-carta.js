/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement}
 */
export const crearCarta = (carta) => {
    if (!carta) {
        throw new Error('La carta es un argumentoObligatorio');
    }
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}