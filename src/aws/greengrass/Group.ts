import { Value } from '../../kloudformation/Value';
import { GroupVersionProps } from './group/GroupVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function group(groupProps: Group & { logicalName?: string }): Group { return ({ ...groupProps, _logicalType: 'AWS::Greengrass::Group' }) as unknown as Group }

export interface Group extends KloudResource {
    name: Value<string>;
    initialVersion?: GroupVersionProps;
    roleArn?: Value<string>;
    tags?: Value<any>;
}