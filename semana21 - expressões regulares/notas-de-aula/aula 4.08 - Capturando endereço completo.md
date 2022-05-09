# 08 Desafio #3: Ajudando os Correios



Precisamos ajudar os correios a entregar corretamente suas correspondências. Para tal, disponibilizaram-nos um arquivo com diversas linhas, nas quais são necessárias as informações: **Nome, Rua, Número e CEP**.

As outras informações também **devem ser separadas** para futuros serviços dos correios, porém **não precisamos capturá-las** neste momento.

```
Nico Steppat|14/05/1977|Rua Buarque de Macedo|50|22222-222|Rio de Janeiro
```

```
Romulo Henrique|14/06/1993|Rua do Lins|120|12345-322|Rio de Janeiro
```

```
Leonardo Cordeiro|01/01/1995|Rua de Campo Grande|01|00001-234|Rio de Janeiro
```

Tente montar uma regex que realize esse trabalho e ajude os correios!



### Opinião do instrutor



A dica para a criação de regex é sempre ir **passo-a-passo**. Por isso, vamos analisar o seguinte padrão, sempre lembrando de agrupar e de adicionar o `pipe` ao final:

Nome|data/de/nascimento|Rua onde mora|numero|cep|Cidade

- **Nome** era necessário capturar, então iremos criar um grupo `([\w\s]+)\|`

- **Data de nascimento** não era necessário, por isso, deixaremos esse grupo como **non-capturing group** `(?:\d\d\/\d\d\/\d\d\d\d)\|`

- **Rua Onde Mora** é necessário capturar, e por isso, criamos um grupo normal: `([\w\s]+)\|`

- **Número** é necessário capturar, portanto: `(\d{1,4})\|`

- **CEP** é necessário capturar, e podemos criar um grupo dessa maneira: `(\d{5}-\d{3})\|`

- **Cidade** é a nossa última análise, e não é necessária. Portanto, basta adicionarmos `?:` para deixar o seu grupo *não-capturável*: `(?:[\w\s]{10,})`

No fim, juntando tudo:

```
^([\w\s]+)\|(?:\d\d\/\d\d\/\d\d\d\d)\|([\w\s]+)\|(\d{1,4})\|(\d{5}-\d{3})\|(?:[\w\s]{10,})$
```

Uma regex gigante! Porém, como visto, se quebrarmos em vários pedacinhos, fica melhor para analisar e organizar o pensamento.
