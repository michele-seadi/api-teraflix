const app = require("./src/app"); // importanto o express um módulo interno (próprio arquivo)

const PORT = 6060;
//app.listen(PORTA, função anônima). Porta é o espaço físico para o servidor rodar dentro do computador. essa Porta é um número. Existem uns números padrões que ficam disponíveis, como o 8080, 3000, 3030, 6060, por exemplo.
app.listen(PORT, () => {
    console.log(`Servidor rodando na Porta ${PORT}`)
}) // para ouvir o servidor, mantem ativo o servidor. teno que fornecer 2 parâmetros: a porta é um e a função anônima é o outro ( q serve somente para controlar se o servidor estiver ativo)

console.log("Olá, mundão!")

//toda vez que recomeçar o projeto tem que reiniciar o servidor. Como??
