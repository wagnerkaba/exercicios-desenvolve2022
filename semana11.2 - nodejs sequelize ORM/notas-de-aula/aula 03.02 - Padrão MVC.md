# 02 - O Modelo MVC

![Padrão MVC](aula%2003.02%20-%20Padr%C3%A3o%20MVC.jpg)



[00:00] Antes de continuarmos, vamos dar uma olhada no que já foi feito até agora, o que faremos em seguida, e o que isso tem a ver com o padrão MVC. MVC é um padrão de arquitetura, de desenvolvimento, que é uma sigla: “modelo”, “vista” ou “visão”, e “controlador”: Model View Controller.

[00:17] Vamos dar uma olhada, agora, como que essa sigla ela se traduz no projeto que estamos desenvolvendo. Por enquanto, nosso projeto está dessa forma: criamos o nosso primeiro modelo, “Pessoas”.

[00:30] Mas, o modelo “Pessoas” não está conectado ainda ao resto da aplicação. Está conectado ao banco, sim, mas a parte da aplicação que a testamos no Postman está toda aqui: nosso usuário está fazendo uma requisição para /teste; na parte da aplicação, onde está definida a rota-teste, já está inclusive resolvendo essa rota-teste, devolvendo um pequeno objeto com uma mensagem de boas-vindas; que o usuário está vendo no Postman, no formato `.json`.

[00:58] Como fazemos, então, para ligar o modelo ao restante da aplicação? O modelo é uma parte muito importante do sistema. É nele que estão as regras de negócio, ele que se conecta com o banco, então não é bom deixarmos a parte de modelo acessível para toda a aplicação, para ficar mexendo livremente nessa parte.

[01:18] Então, veja que o “modelo” do MVC nós já temos, e a “vista” também. Falta o C, que é o controlador, “Controller” que entra justamente entre o modelo e as rotas/vista, para fazer esse intermédio, esse meio de campo, entre o modelo, que não queremos que seja muito acessível, digamos assim, e o restante da aplicação.

[01:39] Então, como esse fluxo vai funcionar a partir de agora, quando começarmos a escrever os nossos controladores? Escreveremos o código a partir de agora. O fluxo será da forma que a imagem abaixo demonstra:

[01:50] Suponha que queremos acessar o modelo Pessoas e que nosso usuário veja um `.json` com todas as pessoas que estão cadastradas. Através de uma requisição HTTP, que nosso usuário faz, ele pode fazer uma requisição, por exemplo, para uma rota /pessoas. Essa rota aqui fala: bom, é uma rota /pessoas, então eu vou chamar o controlador de Pessoas.

[02:11] Cada modelo da nossa aplicação tem o seu próprio controlador, e escreveremos tudo isso aos poucos para entendermos o que está acontecendo. O controlador, a parte “Modelo e Controlador”, inclusive, do diagrama, fica separada do resto. Só o controlador que está passando dados para o modelo, e informa, modelo, estou precisando receber todos os dados de pessoas.

[02:39] O modelo vai enviar esses dados para o controlador de volta; o controlador vai resolver e passar para camada de “vista”, *view*, que vai gerar o `.json`, que nosso usuário vai receber no Postman.

[02:53] “Usuário”, eu coloquei usuário final/front, e coloquei HTML/JSON, porque normalmente, quando vemos esses diagramas, a parte de usuário pode se referir tanto a um quanto ao outro. Pode se referir tanto ao usuário final, que vai receber um HTML ou algo na tela dele; quanto ao *front-end*, que vai receber os dados no formato `.json`, normalmente, e vai usar esses dados na parte da frente da aplicação.

[03:18] Então, estava falando sobre a separação de MVC. Chamamos essa separação de “camada”. Podemos ver as camadas como partes bem separadas, bem definidas e bem específicas da nossa aplicação. Então, a camada *Model* é onde estão os modelos, a camada de controlador, onde estão os controladores (cada modelo tem o seu), e a camada de Vista, que é a camada que gera o que nosso usuário vai receber, espera receber.

[03:50] Podem existir outras camadas intermediárias entre essas três, dependendo da necessidade, do tamanho e da complexidade do seu sistema, porém, o MVC precisa dessas três principais, tendo ou não outras camadas auxiliares para ajudar com outros serviços que seu sistema pode precisar.

[04:11] O padrão MVC é um dos padrões de arquitetura. Existem vários, conforme a necessidade, requisitos do seu sistema. Vou deixar o material em texto se você tiver interesse em saber mais sobre como funciona, quantos existem, e para oque eles servem.

[04:30] E também manter em mente que os padrões de arquitetura servem para que todo mundo que trabalha no projeto saiba exatamente como ele está desenvolvido. Então, se você sabe... Estou desenvolvendo uma aplicação utilizando o modelo MVC, então todo mundo que trabalha vai saber que ela tem a camada de Modelo, que ela tem Controle, que ela tem *View*.

[04:51] Independentemente de ter camadas intermediárias ou não, todo mundo sabe como esse sistema funciona. A pessoa não tem dúvida sobre como ele foi pensado, não fica perdida. Então, a parte C, do controlador, é o que faremos a partir de agora, então vamos fazer isso.


