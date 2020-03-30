import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './discoverer/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function discoverer(discovererProps: Discoverer & { logicalName?: string }): Discoverer { return ({ ...discovererProps, _logicalType: 'AWS::EventSchemas::Discoverer' }) as unknown as Discoverer }

export interface Discoverer extends KloudResource {
    sourceArn: Value<string>;
    description?: Value<string>;
    tags?: TagsEntryProps[];
}