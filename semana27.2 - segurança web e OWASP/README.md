
## Segurança Web: vulnerabilidades do seu sistema e OWASP

## Tópicos importantes

### ☑️ SQL injection
* sqlmap - sqlmap is an open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over of database servers. O sqlmap é uma ferramenta que insere de forma automática várias queries nos parâmetros disponíveis na url para tentar descobrir o tipo de banco de dados usado (MySQL, Oracle, Postgres, etc) o banco da aplicação, as tabelas do banco, assim como os dados que estão inseridos em suas tabelas.
* OWASP - A OWASP é uma empresa sem fins lucrativos, que desenvolveu o projeto que estamos utilizando no curso e também criou um ranking das maiores vulnerabilidades que existem na internet. O ranking está disponível na [página da Owasp](https://owasp.org/Top10/).
* [Como evitar SQL Injection](./notas-de-aula/aula%201.22%20-%20Como%20evitar%20SQL%20Injection.md)

### ☑️ Força bruta
* Burp suite - Burp Suite is an integrated platform/graphical tool for performing security testing of web applications. No curso, [burp suite é utilizado para fazer ataques de força bruta](https://portswigger.net/support/using-burp-to-brute-force-a-login-page).
* Wordlists - Para auxiliar os ataques de força bruta, é possível utilizar as word lists, listas que contem diversas palavras para nomes e senhas comumente utilizadas e compiladas, dessa maneira, as chances de um ataque bem sucedido aumentam. É fácil encontrar wordlists no google. Basta pesquisar, por exemplo: wordlists brute force
* CeWL - Custom Word List generator - CeWL is a ruby app which spiders a given URL to a specified depth, optionally following external links, and returns a list of words which can then be used for password crackers such as John the Ripper. O Cewl cria wordlists para ataques de força bruta buscando palavras a partir de um site. Por exemplo, se uma pessoa quer invadir o site de uma empresa X, talvez as palavras que estão nesse site sejam úteis para formar wordlists.

### ☑️ Cross site scripting (XSS)
* Sequestro de sessão utilizando Cross-site scripting 
* Utilizando BURP para fazer uso da sessão sequestrada
* How to Session Hijacking using BeEF (Browser Exploitation Framework)


### ☑️ Engenharia Social
* [The Social-Engineer Toolkit (setoolkit)](https://github.com/trustedsec/social-engineer-toolkit) - The Social-Engineer Toolkit is an open-source penetration testing framework designed for social engineering. SET has a number of custom attack vectors that allow you to make a believable attack quickly.
* [URL REDIRECTION](./notas-de-aula/aula%204.02%20-%20Redirecionamento%20de%20links.md) - URL Redirection is a vulnerability which allows an attacker to force users of your application to an untrusted external site.
* Utilizar o setoolkit para enviar email para vítimas com nomes de outras pessoas.

### ☑️ Falhas de segurança

* Nikto - Nikto is a free software command-line vulnerability scanner that scans webservers for dangerous files/CGIs, outdated server software and other problems. It performs generic and server type specific checks. It also captures and prints any cookies received. 
* Weevely - O WEEVELY é uma ferramenta desenvolvida em Python que permite que um Backdoor seja gerado no formato .php e se executado em um host remoto pode obter o console do sistema.
* OWASP ZAP - Fundada em 2001, a OWASP (Open Web Application Security Project) é uma comunidade online que cria e disponibiliza de forma gratuita artigos, metodologias, documentação, ferramentas e tecnologias no campo da segurança de aplicações web. Seu documento mais famoso é o OWASP Top 10, que define os maiores riscos de segurança em aplicações web. A lista desses riscos são atualizadas anualmente e podem ser visualizadas gratuitamente [aqui](https://owasp.org/www-project-top-ten/). Para auxiliar a análise desses riscos, a OWASP criou uma ferramenta chamada ZAP (Zed Attack Proxy) e disponibilizou gratuitamente para download. O OWASP ZAP é muito utilizado de forma manual por quem está executando o teste de vulnerabilidade, mas ele também fornece um conjunto de APIs permitindo que o programador automatize através de scripts a execução dos testes.