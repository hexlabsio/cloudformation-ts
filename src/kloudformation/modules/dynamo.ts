import {
  DynamoEntry,
  DynamoIndexes,
  DynamoMapDefinition,
  DynamoType,
} from "@hexlabs/dynamo-ts";
import { DynamoDefinition } from "@hexlabs/dynamo-ts/dist/dynamo-client-config";
import {Table, TableProperties} from "../../aws/dynamodb/Table";
import {Role} from "../../aws/iam/Role";
import {AWS} from "../aws";
import {Iam, Policy} from "../iam/PolicyDocument";
import {normalize} from "../kloudformation";
import {join} from "../Value";

export function grantTableAccess(role: Role, policyName: string, tables: Table[]) {
  const indexes = tables.flatMap(it => (it.globalSecondaryIndexes ?? []).map(gsi => join(it.attributes.Arn, '/index/', gsi.indexName)));
  Iam.from(role).add(policyName, Policy.allow("dynamodb:*", [...tables.map(table => table.attributes.Arn), ...indexes]))
}

export function dynamoTable<
  D extends DynamoMapDefinition,
  H extends keyof DynamoEntry<D>,
  R extends Omit<keyof DynamoEntry<D>, H> | null = null,
  G extends DynamoIndexes<D> = null,
  >(aws: AWS, definition: DynamoDefinition<D, H, R, G>, name: string | undefined, props: Omit<TableProperties, 'globalSecondaryIndexes' | 'keySchema' | 'tableName' | 'attributeDefinitions'>): Table {
  
  const indexKeys = Object.keys(definition.indexes ?? {}).flatMap(key => [definition.indexes![key].hashKey as string, ...(definition.indexes![key].rangeKey ? [definition.indexes![key].rangeKey! as string] : [])]);
  const keys: (keyof D)[] = [...new Set([definition.hash as string, ...(definition.range ? [definition.range! as unknown as string] : []), ...indexKeys])]
  function typeFor(key: keyof D): string {
    const type: DynamoType = definition.definition[key];
    const nonOptionalType = `${type}`.endsWith('?') ? type.toString().substring(0, type.toString().length - 1) : type;
      switch (nonOptionalType) {
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
    keySchema: [{keyType: 'HASH', attributeName: definition.hash as string}, ...(definition.range ? [{keyType: 'RANGE', attributeName: definition.range as unknown as string}]: [])],
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
