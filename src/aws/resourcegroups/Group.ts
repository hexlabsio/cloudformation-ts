import { Value } from '../../kloudformation/Value';
import { ResourceQueryProps } from './group/ResourceQueryProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type GroupAttributes = { Arn: Attribute<string> }
export function group(groupProps: Group): Group & { attributes: GroupAttributes } { return ({ ...groupProps, _logicalType: 'AWS::ResourceGroups::Group', attributes: { Arn: 'Arn' } }) }

export interface Group extends KloudResource {
    name: Value<string>;
    description?: Value<string>;
    resourceQuery?: ResourceQueryProps;
    tags?: Value<any>[];
}