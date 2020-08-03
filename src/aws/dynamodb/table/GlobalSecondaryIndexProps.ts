import { Value } from '../../../kloudformation/Value';
import { KeySchemaProps } from './KeySchemaProps';
import { ProjectionProps } from './ProjectionProps';
import { ProvisionedThroughputProps } from './ProvisionedThroughputProps';

export interface GlobalSecondaryIndexProps {
  indexName: Value<string>
  keySchema: KeySchemaProps[]
  projection: ProjectionProps
  provisionedThroughput?: ProvisionedThroughputProps
}