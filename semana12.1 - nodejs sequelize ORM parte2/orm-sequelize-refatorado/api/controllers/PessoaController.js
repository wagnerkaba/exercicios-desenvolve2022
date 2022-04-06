const { PessoasServices } = require('../services');
const pessoasServices = new PessoasServices();


class PessoaController {
    static async pegaTodasAsPessoas(req, res) {

        try {
            const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }


    }

    static async pegaPessoasAtivas(req, res) {

        try {
            const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos();
            return res.status(200).json(pessoasAtivas);
        } catch (error) {
            return res.status(500).json(error.message);
        }


    }

    static async pegaUmaPessoa(req, res) {
        // const {idPessoa} = req.params;
        // A linha de cima é equivalente à linha de baixo:
        const idPessoa = req.params.idPessoa;

        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(idPessoa)
                }
            })
            return res.status(200).json(umaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body;
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }

    static async atualizaPessoa(req, res) {
        const { idPessoa } = req.params;
        const novasInfos = req.body;
        try {
            //no arquivo "models/pessoas.js" foi definido que por padrão, o sistema busca apenas pessoas ativas 
            //por esse motivo, agora é preciso adicionar "scope('todos')" para buscar pessoas ativas e inativas
            //se não colocar esse scope, o sistema não consegue mudar um aluno desativado para ativo 
            await database.Pessoas.scope('todos').update(novasInfos, { where: { id: Number(idPessoa) } });

            //no arquivo "models/pessoas.js" foi definido que por padrão, o sistema busca apenas pessoas ativas 
            //por esse motivo, agora é preciso adicionar "scope('todos')" para buscar pessoas ativas e inativas 
            const pessoaAtualizada = await database.Pessoas.scope('todos').findOne({ where: { id: Number(idPessoa) } });
            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Na aula 01.05 a tabela de pessoas foi alterada para que nenhum dado seja realmente apagado
    // ou seja, caso o usuário apague um dado, o sistema irá apenas fazer um soft delete
    // vide notas de aula 01.05
    static async apagaPessoa(req, res) {
        const { idPessoa } = req.params;
        try {
            await database.Pessoas.destroy({ where: { id: Number(idPessoa) } });
            return res.status(200).json({ mensagem: `id ${idPessoa} foi apagado` });
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }

    // os dados não são realmente apagados, mas sofrem apenas soft delete
    // dessa forma, é possível restaurar os dados através do método restore
    static async restauraPessoa(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.restore({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `id ${id} restaurado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // O cliente gostaria que, uma vez que o cadastro de um estudante fosse desativado, todas as matrículas relativas a este estudante automaticamente passassem a constar como “canceladas”.
    static async cancelaPessoa(req, res) {
        const { estudanteId } = req.params;
        try {
            await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId));
            return res.status(200).json({ mensagem: `Matrículas referente estudante ${estudanteId} canceladas` });


        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    // criei este método para reverter o cancelamento feito pelo método cancelaPessoa
    static async reverteCancelaPessoa(req, res) {
        const { estudanteId } = req.params;
        try {
            await pessoasServices.reverteCancelaPessoaEMatriculas(Number(estudanteId));
            return res.status(200).json({ mensagem: `Cancelamento de matrículas referente ao estudante ${estudanteId} foi REVERTIDO` });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    //---------------------------------------------------------------
    //      MATRICULAS
    //---------------------------------------------------------------

    static async pegaMatriculas(req, res) {
        const { estudanteId } = req.params;
        try {
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(estudanteId) } });

            // o que é este método getAulasMatriculadas? 
            // "aulasMatriculadas" é o nome do association-scope no arquivo "models/pessoas.js"
            // o sequelize cria um método get automaticamente a partir desse nome de association-scope
            const matriculas = await pessoa.getAulasMatriculadas();
            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }

    static async pegaMatriculasPorTurma(req, res) {
        const { turmaId } = req.params;
        try {
            const todasAsMatriculas = await database.Matriculas
                .findAndCountAll({
                    where: {
                        turma_id: Number(turmaId),
                        status: 'confirmado' //retorna todas matriculas com status 'confirmado'
                    },
                    limit: 10, //limita o número de resultados apresentado a 10
                    order: [['estudante_id', 'DESC']] //apresenta os resultados ordenados por estudante_id de forma descendente
                });
            return res.status(200).json(todasAsMatriculas);
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }
    // O cliente quer poder consultar as matrículas por turma e saber quais delas estão lotadas, para organizar melhor as matrículas.
    static async pegaTurmasLotadas(req, res) {
        const lotacaoTurma = 2; //lotacaoTurma = numero de alunos para sala ser considerada lotada
        try {
            const turmasLotadas = await database.Matriculas
                .findAndCountAll({
                    where: {
                        status: 'confirmado'
                    },
                    attributes: ['turma_id'],
                    group: ['turma_id'],
                    //sequelize.literal allows you to directly insert arbitrary content into the query 
                    having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
                });


            return res.status(200).json(turmasLotadas.count);
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }


    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(umaMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params;
        // What do these three dots (...) do?
        // That's property spread notation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        // Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }


    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body;
        try {
            await database.Matriculas.update(novasInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });

            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId)
                }
            });
            return res.status(200).json(matriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Na aula 01.05 (vide notas de aula) as tabelas foram alterada para que nenhum dado seja realmente apagado
    // ou seja, caso o usuário apague um dado, o sistema irá apenas fazer um soft delete
    static async apagaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId)
                }
            });


            return res.status(200).json({ mensagem: `id ${matriculaId} foi apagado` });
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }

    // os dados não são realmente apagados, mas sofrem apenas soft delete
    // dessa forma, é possível restaurar os dados através do método restore
    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.restore({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json({ mensagem: `id ${matriculaId} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }



}

module.exports = PessoaController;