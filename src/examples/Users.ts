import { Column } from "../decorators/Column.decorator";
import { Entity } from "../decorators/Entity.decorator";

@Entity({ name: "users" })
export class User {
  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  cpf: string;
}
