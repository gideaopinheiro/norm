import { config } from "../config/globals";
import { ColumnType } from "../core/ColumnTypes";

export function Column(columnOptions?: ColumnOptions): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol) {
    const type = Reflect.getMetadata("design:type", target, propertyKey)[
      "name"
    ];
    const tableToken = target.constructor["name"];
    const columnName = columnOptions?.name ?? (propertyKey as string);
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
