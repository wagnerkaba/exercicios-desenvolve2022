
# Utilização de keys para evitar renderizações desnecessárias

O projeto "react-performance-2" está com problema de renderizações desnecessárias quando o usuário clica no botão "excluir".

Se o usuário exclui a última pessoa gerada, não há renderização extra. Porém, se o usuário exclui as primeiras pessoas, o sistema renderiza tudo novamente.

Isso ocorre porque "react-performance-2" busca a pessoa a ser excluída pelo seu index no array. Quando a última pessoa é excluída, não há mudança nesse index. Mas se a primeira pessoa é excluida, todo index é alterado. E quando o index é alterado, o sistema faz uma nova renderização.

Para ver como o index de um array é alterado, execute este [javascript](../extra/teste-array.js).

Para evitar essas renderizações desncessárias, o sistema foi refatorado para que cada pessoa tenha seu próprio id.

Além disso, foi adicionado `key` para `<Pessoa/>` (vide [ListaPessoas](../extra/react-performance-3/src/ListaPessoas/index.js)). 

```
<Pessoa key={pessoa.id} nome={pessoa.nome} id={pessoa.id} deletar={deletarPessoa} />
```



