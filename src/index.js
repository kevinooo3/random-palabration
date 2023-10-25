const messages = [
    "hOLA MANO...",
    "YA ESTA LISTO TU PEDIDO PERRA",
    "GAEAAAAAA",
    "LANZALA PERRO",
    "vAMOS 22 COMAS CARABAYLLON UNICACHI !",
    "RAAAAAAAAAAAAAAAAAA",
    "GOWWWWW",
    "3 2 1 ADIOSSS",
    "ARRIBA PERU",
    "VAMOS OG",
    "GRANDE EG",
    "DENDI JUEGA PURO PUDGE.",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };