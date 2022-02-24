const conexao = require('../infraestrutura/conexao')

// MOMENT is a JavaScript date library for parsing, validating, manipulating, and formatting dates.
const moment = require('moment');
const atendimento = require('../controllers/atendimento');


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
            res.status(400).json(erros);
        } else {



            // exemplo de uso do spread operator (...), ou sintaxe de espalhamento. 
            // Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. 
            // ou seja, será criado um objeto atendimentoDatado com as propriedades de atendimento, dataCriacao e data
            const atendimentoDatado = { ...atendimento, dataCriacao, data };
            console.table(atendimento);
            console.table(atendimentoDatado);

            const sql = 'INSERT INTO Atendimentos SET ?';

            conexao.query(
                sql,
                atendimentoDatado,
                (erro, resultados) => {
                    if (erro) {
                        res.status(400).json(erro);
                    } else {
                        res.status(201).json(atendimento);
                    }
                }
            )
        }
    }

    lista(res){
        const sql = 'SELECT * FROM Atendimentos';

        conexao.query(
            sql,
            (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro);
                } else {
                    res.status(200).json(resultados);
                }
            }


        )

    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`;

        conexao.query(
            sql, 
            (erro, resultados)=>{
                if(erro){
                    res.status(400).json(erro);
                } else {

                    // se enviar json(resultados), será enviado um array
                    // mas no método buscaPorId, basta enviar apenas o primeiro resultado
                    // por isso é melhor enviar resultados[0]
                    const atendimento = resultados[0];
                    res.status(200).json(atendimento)
                }
        });
    }

    altera(id, valores, res){


        // se o cliente enviou data, é preciso formatar
        if(valores.data){
            console.log(valores.data);
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        }


        const sql = 'UPDATE Atendimentos SET ? WHERE id=?';

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res. status(400).json(erro);
            } else {
                res.status(200).json({...valores, id});
            }
        })

    }

    deleta(id, res){
        const sql = 'DELETE FROM Atendimentos WHERE id=?';

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res. status(400).json(erro);
            } else {
                res.status(200).json({id});
            }
        });

    }
}

module.exports = new Atendimento;