# 06 Como organizar nossos testes?

No nosso dia a dia com desenvolvimento é muito comum que tenhamos vários casos de teste diferentes para um mesmo componente ou função. Para tornar nosso projeto fácil de entender e contribuir, temos algumas estruturas para auxiliar a criação dos nossos testes automatizados.

Qual dos cenários abaixo representa uma estrutura adequada para o cenário de um componente com 4 testes unitários?



## Resposta incorreta

Apenas um arquivo para o componente, seguindo a estrutura abaixo.

```
describe('nome do componente', () => {
    test('nome do teste 1', () => {
        */ código do teste */
     })
    it('nome do teste 2', () => {
        */ código do teste */
     })
    it('nome do teste 3', () => {
        */ código do teste */
     })
    test('nome do teste 4', () => {
        */ código do teste */
     })
 })
```

Aqui estamos misturando o uso do `it` e `test`. Mesmo que signifiquem a mesma coisa, devemos escolher um dos dois e padronizar no nosso projeto para facilitar a escrita e leitura dos testes.



## Resposta CORRETA

Apenas um arquivo para o componente, seguindo a estrutura abaixo.

```
describe('nome do componente', () => {
    it('nome do teste 1', () => {
        */ código do teste */
     })
    it('nome do teste 2', () => {
        */ código do teste */
     })
    it('nome do teste 3', () => {
        */ código do teste */
     })
    it('nome do teste 4', () => {
        */ código do teste */
     })
 })
```

Temos os 4 casos de teste do componente no mesmo arquivo e usamos o `describe` para determinar que todos esses casos fazem parte de um mesmo contexto. Podemos usar a função `it` ou `test` para criar os testes, mas nesse exemplo estamos usando o `it`.






