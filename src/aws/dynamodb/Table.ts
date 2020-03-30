import { KeySchemaProps } from './table/KeySchemaProps';
import { AttributeDefinitionProps } from './table/AttributeDefinitionProps';
import { Value } from '../../kloudformation/Value';
import { GlobalSecondaryIndexProps } from './table/GlobalSecondaryIndexProps';
import { LocalSecondaryIndexProps } from './table/LocalSecondaryIndexProps';
import { PointInTimeRecoverySpecificationProps } from './table/PointInTimeRecoverySpecificationProps';
import { ProvisionedThroughputProps } from '../cassandra/table/ProvisionedThroughputProps';
import { SSESpecificationProps } from './table/SSESpecificationProps';
import { StreamSpecificationProps } from './table/StreamSpecificationProps';
import { Tag } from '../Tag';
import { TimeToLiveSpecificationProps } from './table/TimeToLiveSpecificationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function table(tableProps: Table & { logicalName?: string }): Table { return ({ ...tableProps, _logicalType: 'AWS::DynamoDB::Table' }) as unknown as Table }

export interface Table extends KloudResource {
    keySchema: KeySchemaProps[];
    attributeDefinitions?: AttributeDefinitionProps[];
    billingMode?: Value<string>;
    globalSecondaryIndexes?: GlobalSecondaryIndexProps[];
    localSecondaryIndexes?: LocalSecondaryIndexProps[];
    pointInTimeRecoverySpecification?: PointInTimeRecoverySpecificationProps;
    provisionedThroughput?: ProvisionedThroughputProps;
    sSESpecification?: SSESpecificationProps;
    streamSpecification?: StreamSpecificationProps;
    tableName?: Value<string>;
    tags?: Tag[];
    timeToLiveSpecification?: TimeToLiveSpecificationProps;
}