import {Table, TableProperties} from "../../aws/dynamodb/Table";
import {Role} from "../../aws/iam/Role";
import { AWSResourcesFor } from '../aws';
import {Iam, Policy} from "../iam/PolicyDocument";
import { normalize, Value } from "../cloudformation";
import {join} from "../Value";

export function grantTableAccess(role: Role, policyName: string, tables: Table[]) {
  const indexes = tables.flatMap(it => (it.properties.globalSecondaryIndexes ?? []).map(gsi => join(it.attributes.Arn(), '/index/', gsi.indexName)));
  Iam.from(role).add(policyName, Policy.allow("dynamodb:*", [...tables.map(table => table.attributes.Arn()), ...indexes]))
}

type LowerCase<T> =
  T extends Value<string | boolean | number> ? T :
  T extends (infer A)[]
    ? LowerCase<A>[]
    : T extends Record<string, any>
      ? { [K in keyof T as `${Uncapitalize<K & string>}`]: LowerCase<T[K]> }
      : T
function camelCase<T>(obj: T): LowerCase<T> {
  if(Array.isArray(obj)) return obj.map(camelCase) as any;
  if(obj) {
    if(typeof obj === 'object') {
      return Object.keys(obj).reduce((prev, key) => ({...prev, [key.substring(0,1).toLowerCase()+key.substring(1)]: camelCase(obj[key])}), {} as any);
    }
  }
  return obj as any;
}

type UpperCase<T> =
  T extends Value<string | boolean | number> ? T :
  T extends (infer A)[]
    ? UpperCase<A>[]
    : T extends Record<string, any>
      ? { [K in keyof T as `${Capitalize<K & string>}`]: UpperCase<T[K]> }
      : T

export function dynamoTable(
  aws: AWSResourcesFor<'dynamodb'>,
  props: TableProperties | UpperCase<TableProperties>,
  name?: string
): Table {

  const table = aws.dynamodb.table({...camelCase(props), ...(name ? {tableName: name }: {})});
  if(name){
    return table.withLogicalName(normalize(name));
  }
  return table;
}
