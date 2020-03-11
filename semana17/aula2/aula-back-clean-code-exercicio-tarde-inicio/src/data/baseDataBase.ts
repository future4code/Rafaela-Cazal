import knex from "knex";

export abstract class BaseDB {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
      port: 3306,
      user: "rafaela",
      password: "@opMQtmCjAgTTtjdAO86",
      database: "bouman-rafaela"
    }
  });
}
