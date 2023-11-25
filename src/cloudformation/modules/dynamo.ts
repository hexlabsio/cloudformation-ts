import {Table, TableProperties} from "../../aws/dynamodb/Table";
import {Role} from "../../aws/iam/Role";
import { AWSResourcesFor } from '../aws';
import {Iam, Policy} from "../iam/PolicyDocument";
import { normalize } from "../cloudformation";
import {join} from "../Value";

export function grantTableAccess(role: Role, policyName: string, tables: Table[]) {
  const indexes = tables.flatMap(it => (it.properties.globalSecondaryIndexes ?? []).map(gsi => join(it.attributes.Arn(), '/index/', gsi.indexName)));
  Iam.from(role).add(policyName, Policy.allow("dynamodb:*", [...tables.map(table => table.attributes.Arn()), ...indexes]))
}

export function dynamoTable(
  aws: AWSResourcesFor<'dynamodb'>,
  props: TableProperties,
  name?: string
): Table {
  const table = aws.dynamodb.table({...props, ...(name ? {tableName: name }: {})});
  if(name){
    return table.withLogicalName(normalize(name));
  }
  return table;
}
