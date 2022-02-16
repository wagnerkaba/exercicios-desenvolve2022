
const cliente1 = {
    nome: 'andré',
    idade: 36,
    cpf: '98089089',
    email: 'andre@gmail.com',
    telefones: [ '4534564564', '213456486' ],
    dependentes: [
      {
        nome: 'Sara Saraiva',
        parentesco: 'filha',
        dataNasc: '20/03/2021'
      },
      {
        nome: 'Aleta Saraiva',
        parentesco: 'filha',
        dataNasc: '10/10/2014'
      }
    ],
    saldo:100,
    depositar: function(valor)
    {
        this.saldo += valor;
    }
  }

// criando cópia de cliente1

const cliente2 = cliente1;

console.log(`Cliente2 criado com sucesso: ${cliente2.nome}`);

// alterando nome de cliente2

cliente2.nome = "José da Silva";

console.log(`NOME DE Cliente2 ALTERADO com sucesso: ${cliente2.nome}`);

// veja que ao alterar o nome de cliente2, o nome de cliente1 também foi alterado

console.log(`Nome do cliente1 também foi alterado: ${cliente1.nome}`);

// A variável cliente2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original cliente1. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia.

// Como podemos contornar esse comportamento quando criamos objetos? 

// Para evitar esse comportamento, crie o objeto através de Object.create()

// O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma,cliente3 é uma instância diferente de cliente1 e pode ser trabalhada de forma independente.

const cliente3 = Object.create(cliente1);

// alterando nome de cliente3

cliente3.nome = "Sinhozinho Malta";

console.log(`NOME DE Cliente3 ALTERADO com sucesso: ${cliente3.nome}`);

// o nome de cliente1 não foi alterado

console.log(`Nome do cliente1 não foi alterado: ${cliente1.nome}`);


