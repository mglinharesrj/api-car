//Importando módulos (dependências)
const { PORT } = require("dotenv").config().parsed

const app = require("express")()

//Middleware
const bodyParser = require("body-parser")
app.use(bodyParser.json())

//Mapeamento de Rotas
const vehicles = require("../routes/vehicles")
app.use("/vehicles", vehicles)

//Iniciando a aplicação
app.listen(PORT, () => 
    console.log(`Servidor rodando na porta ${ PORT }...`)
)



