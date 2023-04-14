// Orientações a Objetos > POO

// encapsulamento
class Caneta
{

    // atributos > propriedades > adjetivos
    cor = "azul";

    // construtor
    constructor(cor)
    {
        this.cor = cor;
    }
    
    // metodo > função > verbo > ações
    escrever()
    {

    }
}


// bic1 é uma instância da classe Caneta
// bic1 é um objeto da classe Caneta
var bic1 = new Caneta("azul");
var bic2 = new Caneta("vermelha");
var bic3 = new Caneta();

// referencia
var bic4 = bic2;