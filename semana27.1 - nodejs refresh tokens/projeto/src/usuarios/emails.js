const nodemailer = require('nodemailer');

const configuracaoEmailProducao = {
    host: process.env.EMAIL_HOST,
    auth: {
        user: process.env.EMAIL_USUARIO,
        pass: process.env.EMAIL_SENHA
    },
    secure: true
}


const configuracaoEmailTeste = (contaTeste) =>({
    host: 'smtp.ethereal.email',
    auth: contaTeste
});


async function criaConfiguracaoEmail() {

    // verifica variavel de ambiente NODE_ENV para saber se o sistema está em produção ou em teste
    if (process.env.NODE_ENV === 'production') {
        return configuracaoEmailProducao;
    } else {
        const contaTeste = await nodemailer.createTestAccount();
        return configuracaoEmailTeste(contaTeste);
    }
}


class Email {
    async enviaEmail() {

        const configuracaoEmail = await criaConfiguracaoEmail();
        const transportador = nodemailer.createTransport(configuracaoEmail);

        const info = await transportador.sendMail(this);

        console.log(process.env.NODE_ENV)
        if (process.env.NODE_ENV !== 'production') {
            // se o sistema está em ambiente teste, então imprime a url do email fake
            console.log('URL: ' + nodemailer.getTestMessageUrl(info));
        }

    }
}

class EmailVerificacao extends Email {
    constructor(usuario, urlVerificacao) {
        super();
        this.from = '"Blog do Código" <noreply@blogdocodigo.com.br>';
        this.to = usuario.email;
        this.subject = 'Verificação de email';
        this.text = `Olá! Verifique seu email aqui: ${urlVerificacao}`;
        this.html = `<h1>Olá!</h1> Verifique seu email aqui: <a href="${urlVerificacao}"> ${urlVerificacao} </a>`;

    }
}


module.exports = { EmailVerificacao };