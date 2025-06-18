import { ColumnType } from "./ColumnTypes";

export class Column {
  private _name: string;
  private _type: ColumnType;

  private constructor(name: string, type: ColumnType) {
    this._name = name;
    this._type = type;
  }

  static new(props: ColumnProps) {
    return new Column(props.name, props.type);
  }

  serialize() {
    return {
      name: this._name,
      type: this._type,
    };
  }
}

export type ColumnProps = {
  name: string;
  type: ColumnType;
};
