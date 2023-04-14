
class Pessoa
{
    nome;
    telefone;
    endereço;

    constructor()
    {
        console.log('buaaaa');
    }
}


// Herança > extends
class PessoaFisica extends Pessoa
{
    cpf;

    constructor()
    {
        // sobrecarga > altera o valor do pai
        super();
        console.log('buaaaa');
    }
}

class PessoaJuridica extends Pessoa
{
    cnpj;
    responsavel;
}

var joao = new PessoaFisica();
var ambev = new PessoaJuridica();