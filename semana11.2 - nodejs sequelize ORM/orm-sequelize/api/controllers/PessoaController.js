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
}

module.exports = PessoaController;