# 03 Comunicação entre contextos

Você está trabalhando em um projeto que tem dois contextos e se depara com uma situação: O contexto 1 precisa escutar o contexto 2 para que, sempre que um estado do contexto 1 mudar, o contexto 2 precisa ser atualizado.

Qual será a forma correta de escutar esse contexto?

## Resposta

Utilizar o contexto 1 em um hook customizado e utilizar o useEffect do React para escutar o estado.

Alternativa correta! Isso aí! Dessa forma você vai conseguir utilizar uma função disponibilizada para escutar as mudanças desse contexto e apenas mudar o estado quando o outro mudar! Evitando que essa mudança seja feita de forma desnecessária e garantindo que, independente de onde essa mudança venha, você sempre vai escutá-la!