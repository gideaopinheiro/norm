import { config } from "../config/globals";
import { ColumnType } from "../core/ColumnTypes";

export function PrimaryColumn(
  columnOptions?: PrimaryColumnOptions,
): PropertyDecorator {
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

    config.setPrimaryColumn(tableToken, props);
  };
}

export type PrimaryColumnOptions = {
  name?: string;
  type?: ColumnType;
};
