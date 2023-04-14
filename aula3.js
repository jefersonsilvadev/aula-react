// função
//subprograma ou subrotina



// função anonima
let maior = function(n1, n2){
    return n1 > n2
}


function somar(n1, n2){
    return n1 + n2
}

function div(n1, n2){

    if (n2 == 0){

        // dispara uma exepction
        throw new Error('não é possível dividir por zero')
    }
    return n1 / n2
}


/**
 * @param {number} n1
 * @param {number} n2
 * @param {function} operacao
 * @returns {number}
 */
function calculadora(n1, n2, operacao){

    try {
        //callback
        return operacao(n1, n2);
    }catch (e){
        alert('xxxxxxxx')
    }
}