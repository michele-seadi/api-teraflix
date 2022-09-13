/*MODULES (cada arquivo do projeto que é um .js é conisderado um módulo. Até o server.js já é um módulo) e REQUIRE (forma de requerer um módulo de um terceiro)*/


const express = require("express"); // importanto o express (pacote) de um módulo externo para dentro do arquivo. Esse é o arquivo principal do projeto por isso importamos pra cá.



const app = express(); // deixo o express disponível para usar as funcionalidades dele neste arquivo (apenas neste arquivo app.js). Isso é instanciar.

const cors = require("cors"); //Aqui ocorre a importação do Cors. O cors é uma dependência que está  no arquivo package.json. Ele garante a segurança da conexão cliente x servidor. Habilitar o cors no backend é uma boa prática MUITO IMPORTANTE!.
app.use(cors()); // Instanciando o cors e o deixando disponível.

app.use(express.json());// permite que o servidor leia o body da requisição do cleinte (?), ou faz o parseamento (quebra) (?) das infromações que estão no body da requesição para conseguir fazer a leitura (necessário para ser realziada a trasferencia das informações entre cliente-servidor). Parseamento = quebra para ler. No noe_modules tem a funcionalidade body-parser, que faz justamente isso. Mas agora o express colocou como nativo essa funcionalidade. Mas não ficou claro pra mim se esse body-parser não se usa mais, devido a essa nova funcionalidade q o express colocou, ou se esse body-parser é a nova funcionalidade nativa posta pelo express.DÚVIDA!

// definremos a rota principal do nosso projeto.

const moviesRoutes = require("../src/routes/moviesRoutes");

app.use("/movies", moviesRoutes);

module.exports = app; //exportanto o express para módulos internos para ser usado por outros arquivos dentro do projeto, para não ter que fazer toda a importação externa de novo.

