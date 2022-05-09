# O que são âncoras?

Uma âncora não casa caracteres como as *classes* fazem, e nem definem quantidades. **Âncoras marcam uma posição específica no alvo**, por isso não é possível combiná-las com um `quantifier`.

Existem várias âncoras predefinidas, mas as mais comuns são `^`, `$` e `\b`. Lembrando também que os caracteres `^` e `$` são *meta-chars*.

O circunflexo (^) é uma âncora e garante que na string nada deve vir antes de `^`.

Já o `$` é o contrário: depois de `$` não pode haver nenhum caracter na string.

## Word Boundary: \b
The word boundary `\b` matches positions where one side is a word character (usually a letter, digit or underscore—but see below for variations across engines) and the other side is not a word character (for instance, it may be the beginning of the string or a space character).

The regex `\bcat\b` would therefore match `cat` in a `black cat`, but it wouldn't match it in `catatonic`, `tomcat` or `certificate`. Removing one of the boundaries, `\bcat` would match `cat` in `catfish`, and `cat\b` would match `cat` in `tomcat`, but not vice-versa. Both, of course, would match `cat` on its own.

## Non word boundary: \B

`\B` é a negação de `\b`. Ou seja, em uma string `português proporcional compor`, o 
regex `\Bpor\B` iria capturar apenas pro**por**cional. Em outras palavras, a silaba `por` deve aparecer dentro de uma palavra, nunca no inicio ou fim.

