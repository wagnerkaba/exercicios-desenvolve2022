# Como tratar de media queries dentro dos componentes estilizados

## Exemplo

Vide arquivo [index.js](../projeto/src/Components/UI/index.js)


```
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;
```
