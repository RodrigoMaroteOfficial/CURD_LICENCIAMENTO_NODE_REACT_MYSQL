import mysql from "mysql"      //importe mysql (objeto) do "mysql" (modulo da biblioteca do node.js)

export const db = mysql.createConnection({ //mysql no caso eh o objeto
    host: "localhost",
    user: "root",
    password: "marote131519",
    database: "schema-1",
})