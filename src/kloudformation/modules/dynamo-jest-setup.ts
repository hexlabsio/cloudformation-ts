import { DynamoDefinition, DynamoIndex } from "@hexlabs/dynamo-ts";
import {dynamoTable} from "./dynamo";
import * as fs from 'fs';

function fakeDefinition<
  DEFINITION extends DynamoDefinition,
  PK extends keyof DEFINITION,
  SK extends Exclude<keyof DEFINITION, PK> | null = null,
  INDEXES extends Record<string, DynamoIndex<DEFINITION>> = {},
  >(definition: {
  definition: DEFINITION;
  partitionKey: PK;
  sortKey: SK;
  indexes: INDEXES;
}, name: string) {
  return new Promise(resolve => {
    dynamoTable({ dynamodbTable: resolve} as any, definition, name, {})
  });
}

function obj(it?: unknown) {
  if(Array.isArray(it)) {
    return it.map(obj);
  }
  if(typeof it === 'object') {
    return Object.keys(it ?? {}).reduce((acc, key) => ({...acc, [key.slice(0,1).toUpperCase() + key.slice(1)]: obj(it?.[key])}), {ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1}} as any);
  }
  return it;
}

export async function tableDefinition(defintions: Record<string, any>): Promise<{tables: unknown[]}> {
  const tables = await Promise.all(Object.keys(defintions).map(async table => await fakeDefinition(defintions[table], table)));
  return { tables: tables.map(obj) };
}

export async function writeFile(defintions: Record<string, any>, name = 'jest-dynamodb-config.js') {
  const definition = await tableDefinition(defintions);
  fs.writeFileSync('jest-dynamodb-config.js', `module.exports = ${JSON.stringify(definition, null, 2)};`);
}
