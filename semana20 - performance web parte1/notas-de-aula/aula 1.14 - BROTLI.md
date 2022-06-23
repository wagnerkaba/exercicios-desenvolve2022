
#  14 Para saber mais: Brotli

Falamos bastante do GZIP e sua importância. Mas há outras alternativas para compressão do conteúdo trafegado entre cliente e servidor. O GZIP é o clássico que funciona em todos os browsers e servidores, mas há algoritmos mais modernos.

O Brotli em especial é um que tem ganho bastante atenção ultimamente. Ele foi criado pelo Google e anunciado em Setembro de 2015. Segundo estudos, ele tem uma taxa de compressão 25% melhor que o GZIP e com uma velocidade de processamento parecida.

Ele já possui suporte no Firefox, Chrome e Opera há algum tempo. O detalhe é que funciona apenas em conexões HTTPS (pra evitar quebrar intermediários não compatíveis). Nos servidores, há módulos opcionais para vários deles, como nginx e Apache.

Alguns links (em inglês) caso queria se aprofundar:

https://samsaffron.com/archive/2016/06/15/the-current-state-of-brotli-compression https://blogs.akamai.com/2016/02/understanding-brotlis-potential.html