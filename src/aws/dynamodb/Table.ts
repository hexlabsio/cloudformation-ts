import { AttributeDefinitionProps } from './table/AttributeDefinitionProps';
import { Value } from '../../kloudformation/Value';
import { GlobalSecondaryIndexProps } from './table/GlobalSecondaryIndexProps';
import { KeySchemaProps } from './table/KeySchemaProps';
import { LocalSecondaryIndexProps } from './table/LocalSecondaryIndexProps';
import { PointInTimeRecoverySpecificationProps } from './table/PointInTimeRecoverySpecificationProps';
import { ProvisionedThroughputProps } from './table/ProvisionedThroughputProps';
import { SSESpecificationProps } from './table/SSESpecificationProps';
import { StreamSpecificationProps } from './table/StreamSpecificationProps';
import { Tag } from '../Tag';
import { TimeToLiveSpecificationProps } from './table/TimeToLiveSpecificationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type TableAttributes = { Arn: Attribute<string>;StreamArn: Attribute<string> }
export function table(tableProps: Table): Table & {attributes: TableAttributes} { return ({ ...tableProps, _logicalType: 'AWS::DynamoDB::Table', attributes: { Arn: 'Arn',StreamArn: 'StreamArn' } }) }
   
export interface Table extends KloudResource {
  attributeDefinitions?: AttributeDefinitionProps[]
  billingMode?: Value<string>
  globalSecondaryIndexes?: GlobalSecondaryIndexProps[]
  keySchema: KeySchemaProps[]
  localSecondaryIndexes?: LocalSecondaryIndexProps[]
  pointInTimeRecoverySpecification?: PointInTimeRecoverySpecificationProps
  provisionedThroughput?: ProvisionedThroughputProps
  sSESpecification?: SSESpecificationProps
  streamSpecification?: StreamSpecificationProps
  tableName?: Value<string>
  tags?: Tag[]
  timeToLiveSpecification?: TimeToLiveSpecificationProps
}