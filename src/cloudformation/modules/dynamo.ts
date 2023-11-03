import { DynamoIndex, DynamoDefinition } from "@hexlabs/dynamo-ts";
import {Table, TableProperties} from "../../aws/dynamodb/Table";
import {Role} from "../../aws/iam/Role";
import { AWSResourcesFor } from '../aws';
import {Iam, Policy} from "../iam/PolicyDocument";
import {normalize} from "../cloudformation";
import {join} from "../Value";

export function grantTableAccess(role: Role, policyName: string, tables: Table[]) {
  const indexes = tables.flatMap(it => (it.properties.globalSecondaryIndexes ?? []).map(gsi => join(it.attributes.Arn(), '/index/', gsi.indexName)));
  Iam.from(role).add(policyName, Policy.allow("dynamodb:*", [...tables.map(table => table.attributes.Arn()), ...indexes]))
}

export function dynamoTable<
  DEFINITION extends DynamoDefinition,
  PK extends keyof DEFINITION,
  SK extends Exclude<keyof DEFINITION, PK> | null = null,
  INDEXES extends Record<string, DynamoIndex<DEFINITION>> = {},
  >(aws: AWSResourcesFor<'dynamodb'>, definition: {
  definition: DEFINITION;
  partitionKey: PK;
  sortKey: SK;
  indexes: INDEXES;
}, name: string | undefined, props: Omit<TableProperties, 'globalSecondaryIndexes' | 'keySchema' | 'tableName' | 'attributeDefinitions'>): Table {
  
  const indexKeys = Object.keys(definition.indexes ?? {}).flatMap(key => [definition.indexes![key].partitionKey as string, ...(definition.indexes![key].sortKey ? [definition.indexes![key].sortKey! as string] : [])]);
  const keys = [...new Set([definition.partitionKey as string, ...(definition.sortKey ? [definition.sortKey! as unknown as string] : []), ...indexKeys])];
  function typeFor(key: keyof DEFINITION): string {
    const type = definition.definition[key];
    const nonOptionalType = `${type}`.endsWith('?') ? (type as any).toString().substring(0, (type as any).toString().length - 1) : type;
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
  const table = aws.dynamodb.table({
    ...props,
    ...(name ? {tableName: name }: {}),
    keySchema: [{keyType: 'HASH', attributeName: definition.partitionKey as string}, ...(definition.sortKey ? [{keyType: 'RANGE', attributeName: definition.sortKey as unknown as string}]: [])],
    attributeDefinitions: keys.map(key => ({attributeName: key as string, attributeType: typeFor(key as any)})),
  ...((definition.indexes && Object.keys(definition.indexes as any).length > 0) ? {globalSecondaryIndexes: Object.keys(definition.indexes as any).map(key => {
      return {
        indexName: key,
        keySchema: [{
          keyType: 'HASH',
          attributeName: definition.indexes![key].partitionKey as string
        }, ...(definition.indexes![key].sortKey ? [{
          keyType: 'RANGE',
          attributeName: definition.indexes![key].sortKey as string
        }] : [])],
        projection: { projectionType: 'ALL' }
      }
    })}:{})
  });
  if(name) return table.withLogicalName(normalize(name));
  return table;
}
