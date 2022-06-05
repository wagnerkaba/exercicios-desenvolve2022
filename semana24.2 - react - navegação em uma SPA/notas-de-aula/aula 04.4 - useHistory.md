# 04 Qual a ordem de execução? Lidando com 404



Ao acessar uma rota inexistente em nosso blog, quem está navegando nele recebe uma página em branco e fica sem saber o que aconteceu. Qual código abaixo direciona essa pessoa para uma página 404 tratando assim essa indisponibilidade da rota acessada?

## Resposta

```
const history = useHistory()
const handleHistory = () => {     history.push('/404') 
}
```

Alternativa correta! O react router possui um hook chamado `history` que possui o método `push` e através dele conseguimos navegar até a rota indicada, que nesse caso é a rota 404.
