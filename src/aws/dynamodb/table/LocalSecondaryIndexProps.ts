import { Value } from '../../../kloudformation/Value';
import { KeySchemaProps } from './KeySchemaProps';
import { ProjectionProps } from './ProjectionProps';

export interface LocalSecondaryIndexProps {
  indexName: Value<string>
  keySchema: KeySchemaProps[]
  projection: ProjectionProps
}