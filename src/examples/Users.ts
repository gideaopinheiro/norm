import { Column } from "../decorators/Column.decorator";
import { Entity } from "../decorators/Entity.decorator";
import { PrimaryColumn } from "../decorators/PrimaryColumn.decorator";

@Entity({ name: "users" })
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  cpf: string;
}
