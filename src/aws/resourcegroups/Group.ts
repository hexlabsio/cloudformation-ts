import { Value } from '../../kloudformation/Value';
import { ResourceQueryProps } from './group/ResourceQueryProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function group(groupProps: Group & { logicalName?: string }): Group { return ({ ...groupProps, _logicalType: 'AWS::ResourceGroups::Group' }) as unknown as Group }

export interface Group extends KloudResource {
    name: Value<string>;
    description?: Value<string>;
    resourceQuery?: ResourceQueryProps;
    tags?: Value<any>[];
}