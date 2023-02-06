const express = require("express")
const router = express.Router()
const vehiclesCtrl = require("../controllers/vehicles")

//Criar um modelo
router.post("/", vehiclesCtrl.createOne)

//Recuperar todos os modelos
router.get("/", vehiclesCtrl.getAll)

//Recuperar um modelo específico
router.get("/:id", vehiclesCtrl.getOne)

//Recupera pelo modelo específico
router.get("/findmodel/:model", vehiclesCtrl.getbyName);

//Atualiza um modelo (Parcial/Total)
router.patch("/:id", vehiclesCtrl.changeOne)

//Remover um modelo
router.delete("/:id", vehiclesCtrl.removeOne)

module.exports = router 
