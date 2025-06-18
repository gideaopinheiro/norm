import { Column } from "../decorators/Column.decorator";
import { Entity } from "../decorators/Entity.decorator";
import { PrimaryColumn } from "../decorators/PrimaryColumn.decorator";

@Entity()
export class Post {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;
}
