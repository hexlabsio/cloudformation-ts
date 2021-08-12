import {Table, TableProperties} from "../../aws/dynamodb/Table";
import {AWS} from "../aws";
import {normalize} from "../kloudformation";

export type DynamoType =
  | 'string'
  | 'string set'
  | 'number'
  | 'number set'
  | 'binary set'
  | 'binary'
  | 'boolean'
  | 'null'
  | 'list'
  | 'map'
  | DynamoEntryDefinition;
export type DynamoEntryDefinition = { [key: string]: DynamoType };

export type TypeFor<T extends DynamoType> = T extends 'string'
  ? string
  : T extends 'number'
    ? number
    : T extends 'boolean'
      ? boolean
      : T extends 'null'
        ? null
        : T extends DynamoEntryDefinition
          ? { [K in keyof T]: DynamoEntry<T>[K] }
          : never;

export type DynamoEntry<T extends DynamoEntryDefinition> = {
  [K in keyof T]: TypeFor<T[K]>;
};

export type TableDefinition<
  D extends DynamoEntryDefinition,
  H extends keyof D,
  R extends keyof D | null = null,
  G extends Record<
    string,
    { hashKey: keyof D; rangeKey?: keyof D; }
    > | null = null,
  > = { definition: D; hashKey: H; rangeKey?: R; indexes?: G }

export function dynamoTable<
  D extends DynamoEntryDefinition,
  H extends keyof D,
  R extends keyof D | null = null,
  G extends Record<
    string,
    { hashKey: keyof D; rangeKey?: keyof D }
    > | null = null,
  >(aws: AWS, definition: TableDefinition<D, H, R, G>, name: string | undefined, props: Omit<TableProperties, 'globalSecondaryIndexes' | 'keySchema' | 'tableName' | 'attributeDefinitions'>): Table {
  
  const indexKeys = Object.keys(definition.indexes ?? {}).flatMap(key => [definition.indexes![key].hashKey as string, ...(definition.indexes![key].rangeKey ? [definition.indexes![key].rangeKey! as string] : [])]);
  const keys: (keyof D)[] = [...new Set([definition.hashKey as string, ...(definition.rangeKey ? [definition.rangeKey! as string] : []), ...indexKeys])]
  function typeFor(key: keyof D): string {
    const type: DynamoType = definition.definition[key];
      switch (type) {
        case 'string':
          return 'S';
        case 'string set':
          return 'SS';
        case 'number':
          return 'N';
        case 'number set':
          return 'NS';
        case 'binary':
          return 'B';
        case 'binary set':
          return 'BS';
        case 'boolean':
          return 'BOOL';
        case 'null':
          return 'NULL';
        case 'list':
          return 'L';
        default:
          return 'M';
      }
    }
  return aws.dynamodbTable({
  ...(name ? {_logicalName: normalize(name) }: {}),
    ...props,
    ...(name ? {tableName: name }: {}),
    keySchema: [{keyType: 'HASH', attributeName: definition.hashKey as string}, ...(definition.rangeKey ? [{keyType: 'RANGE', attributeName: definition.rangeKey as string}]: [])],
    attributeDefinitions: keys.map(key => ({attributeName: key as string, attributeType: typeFor(key)})),
  ...((definition.indexes && Object.keys(definition.indexes as any).length > 0) ? {globalSecondaryIndexes: Object.keys(definition.indexes as any).map(key => {
      return {
        indexName: key,
        keySchema: [{
          keyType: 'HASH',
          attributeName: definition.indexes![key].hashKey as string
        }, ...(definition.indexes![key].rangeKey ? [{
          keyType: 'RANGE',
          attributeName: definition.indexes![key].rangeKey as string
        }] : [])],
        projection: { projectionType: 'ALL' }
      }
    })}:{})
  })
}
