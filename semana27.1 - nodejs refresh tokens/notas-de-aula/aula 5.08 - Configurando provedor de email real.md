# Autenticação com OAuth 2

Mesmo fácil de implementar e entender, realizar logins para o Gmail usando e-mail [pode causar vários problemas e limitações.](https://nodemailer.com/usage/using-gmail/) Para resolver esse problema, o mais indicado é realizar autenticação usando um outro método: o OAuth 2.

Uma autenticação com OAuth 2 pode exigir uma modificação maior do código atual e um conhecimento sobre o OAuth 2. Mesmo assim, você ainda pode conferir as [intruções do Nodemailer sobre essa alternativa](https://nodemailer.com/smtp/oauth2/) (em inglês).

### Usando outros provedores de e-mail

Apesar da praticidade do e-mail gratuito do Google, ele possui um [limite de envio de 500 e-mails por dia](https://support.google.com/mail/answer/22839?hl=pt-BR). Dessa forma, se sua aplicação tiver mais que 500 usuários, ela pode ter problemas ao se comunicar com todos eles.

Por isso, existem serviços dedicados ao envio de e-mail e oferecem planos (gratuitos e pagos) de acordo com sua demanda. Alguns deles são:

- [Sendinblue](https://pt.sendinblue.com/)
- [Mailgun](https://www.mailgun.com/)
- [SendGrid](https://sendgrid.com/)
- [Amazon SES](https://aws.amazon.com/pt/ses/)
- [Postmark](https://postmarkapp.com/)

Seus planos gratuitos variam entre 100/300 e-mails por dia mas podem ser facilmente estendidos com planos pagos. Por exemplo, o Sendinblue possui planos com limites de 40 mil e-mails por mês por $ 25 (25 dólares) por mês. É importante analisar suas demandas e opções pois cada provedor e plano possuem serviços e modos de cobrança diferentes.

Além disso, alguns serviços de envio de e-mails possuem [APIs em Node.js](https://sendgrid.com/solutions/email-api/) que podem substituir o Nodemailer. Mesmo assim, costumam ter uma funcionalidade muito parecida, sem necessitar uma modificação muito grande do código atual.

Assim, é natural que projetos possam iniciar com alternativas mais baratas e limitadas. Porém, conforme eles vão crescendo, é importante buscar alternativas que consigam suprir suas demandas.
