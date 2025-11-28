import { Sequelize } from "sequelize"

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: process.env.database ?? 'exemplo', 
            host: process.env.host ?? 'localhost',
            username: process.env.username ?? 'root',
            password: process.env.password ?? '',
            dialect: process.env.dialect ?? 'mysql'
        })
    }
}

export default new Database()