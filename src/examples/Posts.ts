import { Column } from "../decorators/Column.decorator";
import { Entity } from "../decorators/Entity.decorator";

@Entity()
export class Post {
  @Column()
  title: string;

  @Column()
  content: string;
}
