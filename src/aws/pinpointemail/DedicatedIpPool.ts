import { Value } from '../../kloudformation/Value';
import { TagsProps } from './dedicatedippool/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dedicatedIpPool(dedicatedIpPoolProps: DedicatedIpPool & { logicalName?: string }): DedicatedIpPool { return ({ ...dedicatedIpPoolProps, _logicalType: 'AWS::PinpointEmail::DedicatedIpPool' }) as unknown as DedicatedIpPool }

export interface DedicatedIpPool extends KloudResource {
    poolName?: Value<string>;
    tags?: TagsProps[];
}