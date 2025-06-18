import { ColumnProps } from "../core/Column";
import { Table, TableProperties } from "../core/Table";

export const config = {
  tables: new Map<string, Table>(),
  addTable: (tableToken: string, tableProperties: TableProperties) => {
    const tableName: string = tableProperties.name ?? tableToken;
    if (!config.tables.has(tableToken)) {
      config.tables.set(tableToken, new Table());
    }
    config.tables.get(tableToken)?.setName(tableName);
  },
  addColumn: (tableToken: string, column: ColumnProps) => {
    if (!config.tables.has(tableToken)) {
      config.tables.set(tableToken, new Table());
    }
    config.tables.get(tableToken)?.addColumn(column);
  },
  serialize() {
    return {
      tables: Array.from(config.tables).map(([_, tbl]) => tbl.serialize()),
    };
  },
};
