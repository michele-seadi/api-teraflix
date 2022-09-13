// gerenciar a requisição e a resposta

//Damanda: ver todos os filmes disponíveis
const getAll = (req, res)=> {   //requisição - resposta
    console.log("REQUISIÇÃO", req);

    res.send({   //método relacionado ao node.js
        "message":"Bateu na rota (:"
    })
};

module.export = {
    getAll
}

