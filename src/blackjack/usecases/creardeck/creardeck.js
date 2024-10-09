import _ from 'underscore'

/**
 * Esto crea un nuevo deck
 * @param {Array} tiposCarta 
 * @param {Array} cartaEspeciales 
 * @returns {Array} esto retorna un deck de strings
 */

export const crearDeck = (tiposCarta, cartaEspeciales) => {

    if(!tiposCarta || tiposCarta.length -1 === 0) 
            throw new Error('tiposCarta es obligatorio como un arreglo de string');

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of cartaEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}