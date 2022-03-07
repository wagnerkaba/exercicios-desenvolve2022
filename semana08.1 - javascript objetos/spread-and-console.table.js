
// exemplo de uso do spread operator (...), ou sintaxe de espalhamento. 
// Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. 

const listaClientes = [
    {
        nome: 'andré',
        idade: 36,
        cpf: '98089089',
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
        ]
    },

    {
        nome: 'Marcela',
        idade: 52,
        cpf: '156497848',
        dependentes: [
            {
                nome: 'Maria Antonieta',
                parentesco: 'filha',
                dataNasc: '20/10/2014'
            }
        ]
    }

]

var listaDependentes = [];


// coloca todos os dependentes dos clientes no array listaDependentes
for(let i = 0; i < listaClientes.length; i++){
    listaDependentes.push(...listaClientes[i].dependentes);
}



console.table(listaDependentes);

console.table(listaClientes);





