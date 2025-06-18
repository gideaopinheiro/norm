import { config } from "./config/globals";
import { DataSource } from "./core/DataSource";
import { Post } from "./examples/Posts";
import { User } from "./examples/Users";

console.log(config.tables);
console.log(config.serialize());
const ds = new DataSource({
  user: "root",
  password: "root",
  entities: [Post, User],
});
console.log(ds);
