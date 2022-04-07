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
            const umaPessoa = await pessoasServices.pegaQualquerPessoa({ id: idPessoa });
            return res.status(200).json(umaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body;
        try {
            const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }

    static async atualizaPessoa(req, res) {
        const { idPessoa } = req.params;
        const novasInfos = req.body;
        try {

            await pessoasServices.atualizaQualquerPessoa(novasInfos, idPessoa)

            const pessoaAtualizada = await pessoasServices.pegaQualquerPessoa({ id: Number(idPessoa) });
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
            await pessoasServices.apagaRegistro(Number(idPessoa));
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
            await pessoasServices.restauraRegistro(Number(id));
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


}

module.exports = PessoaController;