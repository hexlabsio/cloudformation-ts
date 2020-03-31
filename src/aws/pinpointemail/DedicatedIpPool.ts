import { Value } from '../../kloudformation/Value';
import { TagsProps } from './dedicatedippool/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DedicatedIpPoolAttributes = {  }
export function dedicatedIpPool(dedicatedIpPoolProps: DedicatedIpPool): DedicatedIpPool & { attributes: DedicatedIpPoolAttributes } { return ({ ...dedicatedIpPoolProps, _logicalType: 'AWS::PinpointEmail::DedicatedIpPool', attributes: {  } }) }

export interface DedicatedIpPool extends KloudResource {
    poolName?: Value<string>;
    tags?: TagsProps[];
}