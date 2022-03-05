const conexao = require('../infraestrutura/database/conexao')

// MOMENT is a JavaScript date library for parsing, validating, manipulating, and formatting dates.
const moment = require('moment');
const axios = require('axios');

const repositorio = require('../repositorios/atendimento');


class Atendimento {

    adiciona(atendimento, res) {

        //Quando Moment() é invocado sem parâmetros, ele retorna a data atual formatada conforme format()
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');

        //quando o cliente envia a data, provavelmente ela não estará formatada corretamente
        //se a data não está formatada corretamente, isso vai gerar erro quando for persistir os dados no mysql
        //por isso, é necessário formatar a data utilizando a biblioteca MOMENT
        // OBS: a data gerada pelo cliente deve estar no formato 'DD/MM/YYYY'
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

        // verifica se a data agendada para atendimento não é anterior à data da criação do agendamento
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao);

        // verifica se a string cliente é maior ou igual a 5
        const clienteEhValido = atendimento.cliente.length >= 5;

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual à data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }

        ];

        const erros = validacoes.filter(campo => !campo.valido);

        // se erros.length = 0 então existemErros == 0 (false)
        const existemErros = erros.length;



        if (existemErros) {
            // Este promise não tem resolve, mas apenas reject            
            return new Promise((resolve, reject) => reject(erros));
        } else {

            // exemplo de uso do spread operator (...), ou sintaxe de espalhamento. 
            // Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. 
            // ou seja, será criado um objeto atendimentoDatado com as propriedades de atendimento, dataCriacao e data
            const atendimentoDatado = { ...atendimento, dataCriacao, data };
            return repositorio.adiciona(atendimentoDatado)
                .then(resultados => {
                    
                    const id = resultados.insertId;
                    return { ...atendimento, id };
                })
                // .catch(console.log("este catch não foi criado na aula"));
        }
    }

    lista(res) {
        const sql = 'SELECT * FROM Atendimentos';

        conexao.query(
            sql,
            (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro);
                } else {
                    res.status(200).json(resultados);
                }
            }


        )

    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`;

        // what is async function in javascript?
        //An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

        conexao.query(sql, async (erro, resultados) => {

            // se enviar json(resultados), será enviado um array
            // mas no método buscaPorId, basta enviar apenas o primeiro resultado
            // para enviar o primeiro resultado, basta requerer "resultados[0]"
            const atendimento = resultados[0];

            const cpf = atendimento.cliente;

            if (erro) {
                res.status(400).json(erro);
            } else {

                // OBS1: 
                // What do {curly braces} around javascript variable name mean?
                // This is what's known as a destructuring assignment
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
                // OBS2:
                // Axios é utilizado para consumir API
                // http://localhost:8082/ é o endereço onde esta api vai pedir dados do cliente para outra api chamada cliente.js
                // Assim, é necessário que a API cliente.js esteja funcionando no http://localhost:8082/
                // A api cliente.js está dentro da pasta "servicos"
                const { data } = await axios.get(`http://localhost:8082/${cpf}`);

                atendimento.cliente = data;

                res.status(200).json(atendimento)
            }
        });
    }

    altera(id, valores, res) {


        // se o cliente enviou data, é preciso formatar
        if (valores.data) {
            console.log(valores.data);
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        }


        const sql = 'UPDATE Atendimentos SET ? WHERE id=?';

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ ...valores, id });
            }
        })

    }

    deleta(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id=?';

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ id });
            }
        });

    }
}

module.exports = new Atendimento;