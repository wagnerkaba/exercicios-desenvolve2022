


const mensagem = {
  positiva: msg => console.log(`mensagem positiva: ${msg}`),
  negativa: msg => console.log(`mensagem negativa: ${msg}`)
  
};

mensagem['positiva']('alegria');
mensagem['negativa']('tristeza');