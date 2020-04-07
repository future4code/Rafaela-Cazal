const knex = require("knex");

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.HOST,
        port: 3306,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB
    }
})

exports.handler = async event => {

   const result = await connection.raw(`SELECT * FROM users`);

    return {
        statusCode: 200,
        body: JSON.stringify(result[0][0])
    };
};

