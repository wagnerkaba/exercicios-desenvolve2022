const database = require('../models');

class PessoaController {
    static async pegaTodasAsPessoas(req, res){

        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch(error) {
            return res.status(500).json(error.message);
        }


    }

    static async pegaUmaPessoa(req, res){
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
        } catch (error){
            return res.status(500).json(error.message);
        }
    }

    static async criaPessoa(req, res){
        const novaPessoa = req.body;
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch (error){
            return res.status(500).json(error.message);

        }
    }

    static async atualizaPessoa(req, res){
        const {idPessoa} = req.params;
        const novasInfos = req.body;
        try{
            await database.Pessoas.update(novasInfos, {where:{id:Number(idPessoa)}});
            const pessoaAtualizada = await database.Pessoas.findOne({where: {id: Number(idPessoa)}});
            return res.status(200).json(pessoaAtualizada);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagaPessoa(req, res){
        const {idPessoa}=req.params;
        try{
            await database.Pessoas.destroy({where: {id: Number(idPessoa)}});
            return res.status(200).json({mensagem: `id ${idPessoa} foi apagado`});
        }catch(error){
            return res.status(500).json(error.message);

        }
    }

    //---------------------------------------------------------------
    //      MATRICULAS
    //---------------------------------------------------------------

    static async pegaUmaMatricula(req, res){
        const {estudanteId, matriculaId } = req.params;

        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(umaMatricula);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }

    static async criaMatricula(req, res){
        const {estudanteId} = req.params;
        // What do these three dots (...) do?
        // That's property spread notation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        // Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId)};
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);
        } catch (error){
            return res.status(500).json(error.message);

        }
    }

    
    static async atualizaMatricula(req, res){
        const {estudanteId, matriculaId } = req.params;
        const novasInfos = req.body;
        try{
            await database.Matriculas.update(novasInfos, {
                where:{
                    id:Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }});

            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId)
                }});
            return res.status(200).json(matriculaAtualizada);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagaMatricula(req, res){
        const {estudanteId, matriculaId } = req.params;

        try{
            await database.Matriculas.destroy({where: {
                id: Number(matriculaId)
            }});


            return res.status(200).json({mensagem: `id ${matriculaId} foi apagado`});
        }catch(error){
            return res.status(500).json(error.message);

        }
    }


}

module.exports = PessoaController;