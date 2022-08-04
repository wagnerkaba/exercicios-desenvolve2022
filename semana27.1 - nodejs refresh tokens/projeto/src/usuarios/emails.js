const nodemailer = require('nodemailer');

class Email {
    async enviaEmail() {
        const contaTeste = await nodemailer.createTestAccount();

        const transportador = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            auth: contaTeste
        });
        
        const info = await transportador.sendMail(this);

        console.log('URL: ' + nodemailer.getTestMessageUrl(info));
    }
}

class EmailVerificacao extends Email {
    constructor(usuario, urlVerificacao){
        super();
        this.from = '"Blog do Código" <noreply@blogdocodigo.com.br>';
        this.to = usuario.email;
        this.subject = 'Verificação de email';
        this.text = `Olá! Verifique seu email aqui: ${urlVerificacao}`;
        this.html = `<h1>Olá!</h1> Verifique seu email aqui: <a href="${urlVerificacao}"> ${urlVerificacao} </a>`;

    }
}


module.exports = { EmailVerificacao };