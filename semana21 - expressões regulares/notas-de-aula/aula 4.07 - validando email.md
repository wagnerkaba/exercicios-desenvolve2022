# 07 Desafio #2: Validando email

A validação de um email é um dos exemplos clássicos sobre expressões regulares e claro que não pode faltar neste curso.

Novamente, é preciso ajudar a equipe de desenvolvedores do Alura, mas agora é preciso validar qualquer email!

Seguem algumas dicas:

- Aproveite algo da sua regex do exercício anterior;
- use os âncoras `^` e `$`;
- analise parte por parte:
  - primeiro focando na parte local (tudo antes do `@`);
  - depois no domínio (tudo depois do `@`);
- você pode repetir um grupo:
  - por exemplo, `(([a-z]+)\.)+` significa vários caracteres minúsculos seguido por ponto, uma ou mais vezes.

Seguem alguns emails que devem ser pegos pela regex:

```
donkey.kong@kart.com.brbowser1@games.info 
super-mario@nintendo.JPTEAM.donkey-kong@MARIO.kart1.nintendo.com
```

E aqui alguns exemplos do que não pegar:

```
toad@kart...comwario@kart@nintendo.comyoshi@nintendodaisy@nintendo.b
..@email.com
```

Mãos à obra!



## Solução

Segue uma possível solução (já bastante complexa!):

```
^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$
```

Vamos por partes na explicação:

- a regex usa âncoras no início `^` e fim `$` para garantir o match **inteiro**;
- antes do `@`, temos: `^([\w-]\.?)+`
  - definimos uma classe com *word-chars* e *hífen*, seguido por um ponto opcional: `[\w-]\.?`
  - essa classe pode se repetir uma ou mais vezes, então criamos um grupo e `+` ao final: `([\w-]\.?)+`
- depois do `@`, temos:
  - `([\w-]+\.)+`, que é bastante parecido com o anterior ao `@`, porém com o **.** obrigatório,
  - `([A-Za-z]{2,4})+$`, que é o final da nossa regex, seleciona o domínio do email, como `br`, `com`, `us`. O mínimo de letras dessa parte final devem ser **2** e no máximo **4**.

Há vários exemplo complexos disponíveis na web, mas lembre-se que a autenticidade de um email só pode ser verificada enviando um email para usuário.
