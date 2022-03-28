const conexao = require('../infraestrutura/database/conexao');
const uploadDeArquivo = require('../infraestrutura/arquivos/uploadDeArquivos');

class Pet {



    // Função que recebe um JSON (pet) com um endereço que contém uma foto do pet
    // O JSON (pet) é enviado como parâmetro para a função uploadDeArquivo
    // A função uploadDeArquivo pega a imagem e salva essa imagem em um novo caminho
    // se não houver nenhum erro, o novo caminho é salvo no banco de dados 
    // callbackUploadDeArquivo tem a função de salvar o caminho no banco de dados
    adiciona(pet, res) {
        const query = 'INSERT INTO Pets SET ?';

        // Callback Function que será enviado como parâmetro na function uploadDeArquivo
        // Se tudo der certo com a função uploadDeArquivo, é invocado o callbackUploadDeArquivo
        // callbackUploadDeArquivo serve para persistir dados no banco de dados
        // callbackUploadDeArquivo recebe como parâmetro "erro" e "novoCaminho"
        // "erro" serve para indicar se ocorreu algum erro durante uploadDeArquivo
        // novoCaminho é o local em que o arquivo foi salvo na função uploadDeArquivo
        const callbackUploadDeArquivo = function (erro, novoCaminho) {

            // se ocorreu um erro no uploadDeArquivo, o erro é mostrado ao usuário
            // se não ocorreu erro, os dados são salvos no banco de dados
            if(erro){
                res.status(400).json({erro});

            } else {
                const novoPet = { nome: pet.nome, imagem: novoCaminho };
    
                conexao.query(query, pet, erro => {
                    if (erro) {
                        console.log(erro);
                        res.status(400).json(erro);
                    } else {
                        res.status(200).json(novoPet);
                    }
    
                })
            }

        }



        uploadDeArquivo(pet.imagem, pet.nome, callbackUploadDeArquivo)

    }
}

module.exports = new Pet();