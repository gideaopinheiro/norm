import "reflect-metadata";
import { config } from "../config/globals";
import { ColumnType } from "../core/ColumnTypes";

export function Column(columnOptions?: ColumnOptions) {
  return function (target: any, propertyKey: string) {
    const type = Reflect.getMetadata("design:type", target);
    const tableToken = target.constructor["name"];
    const columnName = columnOptions?.name ?? propertyKey;
    const props = {
      name: columnName,
      type: columnOptions?.type ?? type,
    };
    config.addColumn(tableToken, props);
  };
}

export type ColumnOptions = {
  name?: string;
  type: ColumnType;
};
