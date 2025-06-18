import { config } from "../config/globals";

export function Entity(tableOptions?: string | TableOptions) {
  return function (constructor: Function) {
    const tableToken = constructor.name;
    const tableName =
      typeof tableOptions === "string"
        ? tableOptions
        : (tableOptions?.name ?? tableToken);
    config.addTable(tableToken, { name: tableName });
  };
}

export type TableOptions = {
  name?: string;
};
