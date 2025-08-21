import typeorm = require("typeorm");
import { Workout } from "@entities/Workout";

export const AppDataSource = new typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "goswim",
  synchronize: true, // TODO: implements migrations
  logging: false,
  entities: [Workout],
  migrations: [],
  subscribers: [],
})