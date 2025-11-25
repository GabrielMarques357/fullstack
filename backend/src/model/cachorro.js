import database from "../config/databse.js"

class User {
    constructor() {
        this.model = database.db.define('petshop', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            raca: {
                type: database.db.Sequelize.STRING
            },
            permissao: {
                type: database.db.Sequelize.INTEGER
            }
        })
    }
   
}

export default new User().model