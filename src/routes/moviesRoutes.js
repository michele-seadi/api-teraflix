// Resposável por organizar as demais rotas do projeto. Defino pra onde o cliente vai fazer a requisição.

const express = require("express");
const router = express.Router();

const controllers = require("../controllers/movieControllers"); // importanto o movieControllers, agora é possível acessar as informações do controllers.

console.log(controllers);

router.get("/all", controllers.getAll);

module.exports = router;
