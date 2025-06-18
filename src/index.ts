import "reflect-metadata";
import { config } from "./config/globals";
import { Post } from "./examples/Posts";
import { User } from "./examples/Users";
import { DataSource } from "./core/DataSource";

console.log(config.tables);
console.log(config.serialize());
const ds = new DataSource({
  user: "root",
  password: "root",
  entities: [Post, User],
});
console.log(ds);
