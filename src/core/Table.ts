import { Column, ColumnProps } from "./Column";

export class Table {
  private _name: string | null = null;
  private _columns = new Set<Column>();
  private _primaryColumn: Column | null = null;

  setName(n: string) {
    if (!this._name) {
      this._name = n;
    }
  }

  addColumn(colProp: ColumnProps) {
    this._columns.add(Column.new(colProp));
  }

  setPrimaryColumn(colProp: ColumnProps) {
    if (this._primaryColumn) {
      throw new Error(`Tables can have only one primary column`);
    }
    this._primaryColumn = Column.new(colProp);
  }

  serialize() {
    return {
      name: this._name,
      columns: Array.from(this._columns).map((col) => col.serialize()),
    };
  }
}

export type TableProperties = {
  name?: string;
  columns?: Set<Column>;
};
