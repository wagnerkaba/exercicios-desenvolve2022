# 10 Servidor HTTP local

A partir desse ponto, recomendo fortemente você subir o projeto em um servidor HTTP local para testarmos. Melhor ainda: subir ambas as versões para podermos compará-las. A pasta `site` possui a versão original não otimizada e a pasta `dist` possui a versão final otimizada.

Algumas opções:

- [Nginx](https://cursos.alura.com.br/course/otimizacao-performance-web/task/22450#nginx)
- [PHP builtin server](https://cursos.alura.com.br/course/otimizacao-performance-web/task/22450#php)
- [Google App Engine](https://cursos.alura.com.br/course/otimizacao-performance-web/task/22450#gae)
- [Outros](https://cursos.alura.com.br/course/otimizacao-performance-web/task/22450#outros)

---

## Subindo no nginx

Vou usar bastante o nginx nas aulas, por ser bem simples de instalar e configurar.

1) Já tendo o nginx instalado, crie um novo arquivo texto chamado `curso-alura` com configuração de servidor. A pasta varia de sistema para sistema, mas geralmente fica em `/etc/nginx/servers/` ou `/etc/nginx/sites-enabled/`.

2) Nesse arquivo `curso-alura` vamos configurar 2 portas diferentes para as duas versões do site:

```
server {
  listen 2020;
  root /Users/alura/performance-web/site;
}

server {
  listen 3030;
  root /Users/alura/performance-web/dist;
}
```

(Substitua para as portas de sua preferência e, claro, troque o caminho do *root* para apontar para os diretórios na sua máquina.)

3) Recarregue as configurações do nginx no terminal com `nginx -s reload`

Abra no navegador: [http://localhost:2020](http://localhost:2020/) e [http://localhost:3030](http://localhost:3030/)

---

## Subindo no AppEngine local

Abra o **GoogleAppEngineLauncher** que instalamos antes. Você pode adicionar ambas as pastas - `site` e `dist` - como projetos nele. Vá em **File -> Add Existing Application**.

Cada uma das versões pode ser iniciada clicando no botão verde de **Run**.

*Note que é possível que o Google App Engine deixe o projeto em vermelho acusando um erro mas mesmo assim o servidor local inicia e funciona. Esse "erro" apenas indica que faltam algumas configurações para deploy na nuvem - o que veremos mais adiante no curso. Pra agora, executar local é apenas o que precisamos.*

Confira as portas que ele definiu e abra no navegador. Deve ser algo assim: [http://localhost:8080](http://localhost:8080/) e [http://localhost:9080](http://localhost:9080/)

---

## Subindo com PHP built-in server

Se você já programa em PHP e o tem instalado, saiba que no PHP 5.5+ há um servidor local simples já embutido. Para subir, abra dois terminais diferentes e em cada um deles cada uma das versões do projeto:

Num terminal:

```
cd performance-web/sitephp -S 0.0.0.0:2020
```

E no outro:

```
cd performance-web/distphp -S 0.0.0.0:3030
```

Abra no navegador: [http://localhost:2020](http://localhost:2020/) e [http://localhost:3030](http://localhost:3030/)

---

## Outros servidores

Se você usa outro servidor, consulte a documentação para ver como expor as duas pastas do projeto via HTTP. Deve ser bem simples.
