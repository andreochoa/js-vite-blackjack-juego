import {pedirCarta} from './';
import {valorCarta} from './';
import {crearCarta} from './';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} puntosHTML 
 * @param {HTMLElement} divCartasComputadora 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos = 0, puntosHTML, divCartasComputadora, deck ) => {

    if (!deck || deck.length === 0) {
        throw new Error('El deck esta vacio');
    }
    if (!puntosHTML) {
        throw new Error('PuntosHTML son necesarios');
    }
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCarta(carta);
        divCartasComputadora.append( imgCarta );
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}