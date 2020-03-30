import { Value } from '../../../kloudformation/Value';
import { KeySchemaProps } from './KeySchemaProps';
import { ProjectionProps } from './ProjectionProps';

export function localSecondaryIndexProps(localSecondaryIndexPropsProps: LocalSecondaryIndexProps): LocalSecondaryIndexProps { return (localSecondaryIndexPropsProps) as unknown as LocalSecondaryIndexProps }

export interface LocalSecondaryIndexProps {
    indexName: Value<string>;
    keySchema: KeySchemaProps[];
    projection: ProjectionProps;
}