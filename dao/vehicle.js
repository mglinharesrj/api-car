const db = require("../infra/connections")
const { ulid } = require("ulid")
const { reset } = require("nodemon")

class Vehicle {
    create(data, callback){

        const { id, manufacter, model, owner, acquision, CPF,email  } = data
        const sql = `INSERT INTO vehicles 
                    (id, manufacter, model, owner, acquision, CPF, email) 
                    VALUES 
                    ('${ulid ()}', '${manufacter}', '${model}', '${owner}', '${acquision}', '${CPF}', '${email}')`

        db.run(sql, callback)
    }

    findAll(callback) {
        const sql = "SELECT * FROM vehicles"
        db.all(sql, callback)
    }

    findOne(id, callback) {
        // const { id } = data //n preciso mais pq parrei o req.params.id
        const sql = `SELECT * FROM vehicles WHERE id = '${id}'`
        db.get(sql, callback)
    }

    findByName(model, callback){
      
        const sql = `SELECT * FROM vehicles WHERE model LIKE '${model}'`
        
        db.all(sql, callback);
    }

    delete(id, callback) {
        // const { id } = req.params //não precisa colocar aqui, já foi definida no controller (req.params.id)
        const sql = `DELETE FROM vehicles WHERE id = '${id}'`

        db.run(sql, callback)
    }

    updatePartial(id, data, callback) {
        console.log(id, data)

        let vehicleData = Object.entries(data)
        let fields = []
        for (let i=0; i < vehicleData.length; i++) {
            fields.push(`${vehicleData[i][0]} = '${vehicleData[i][1]}'`)
        }

        const sql = `UPDATE vehicles SET
                        ${fields.join(",")}
                    WHERE
                        id = '${id}'`

        db.run(sql, callback)
    }

}

module.exports = new Vehicle ()

