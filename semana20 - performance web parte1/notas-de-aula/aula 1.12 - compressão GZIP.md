# 12 Projeto: habilitar GZIP

Habilitar compressão gzip nos recursos de texto é uma das práticas mais impactantes no tamanho final da página. Vamos fazê-lo.

Essa configuração *depende de servidor*. Consulte o servidor que você está usando. Geralmente é uma configuração bastante simples.

Se estiver usando o nginx como eu, bastam duas novas linhas:

```
server {
  listen 2020;
  root /Users/alura/performance-web/site;
}

server {
  listen 3030;
  root /Users/alura/performance-web/dist;

  gzip on;
  gzip_types text/css application/javascript image/svg+xml;
}
```

Recarregue o nginx com `nginx -s reload`.

Repare que habilitei apenas na versão otimizada, justo para podermos comparar.

**Abra novamente no DevTools as duas versões do site e analise a aba Network. Que resultados você consegue observar? Melhorou bastante?**

O tamanho final caiu dos anteriores 950KB para agora 766KB. Uma queda de quase 20%! Se somar com o ganho da minificação, economizamos já 30%, de 1,1MB para 766KB, com 2 práticas simples.

Repare ainda que os requests que mais caíram foram os texto. O HTML que estava em 32KB foi para míseros 6KB. Uma grande melhora! O jQuery, que começou em mais de 250KB está agora em 34KB após gzip e minificação.

Excelentes resultados!


