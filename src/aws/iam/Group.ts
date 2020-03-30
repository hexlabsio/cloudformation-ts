import { Value } from '../../kloudformation/Value';
import { PolicyProps } from './group/PolicyProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function group(groupProps: Group & { logicalName?: string }): Group { return ({ ...groupProps, _logicalType: 'AWS::IAM::Group' }) as unknown as Group }

export interface Group extends KloudResource {
    groupName?: Value<string>;
    managedPolicyArns?: Value<Value<string>[]>;
    path?: Value<string>;
    policies?: PolicyProps[];
}