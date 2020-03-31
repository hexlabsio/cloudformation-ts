import { Value } from '../../kloudformation/Value';
import { GroupVersionProps } from './group/GroupVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type GroupAttributes = { RoleAttachedAt: Attribute<string>; LatestVersionArn: Attribute<string>; Id: Attribute<string>; Arn: Attribute<string>; RoleArn: Attribute<string>; Name: Attribute<string> }
export function group(groupProps: Group): Group & { attributes: GroupAttributes } { return ({ ...groupProps, _logicalType: 'AWS::Greengrass::Group', attributes: { RoleAttachedAt: 'RoleAttachedAt', LatestVersionArn: 'LatestVersionArn', Id: 'Id', Arn: 'Arn', RoleArn: 'RoleArn', Name: 'Name' } }) }

export interface Group extends KloudResource {
    name: Value<string>;
    initialVersion?: GroupVersionProps;
    roleArn?: Value<string>;
    tags?: Value<any>;
}