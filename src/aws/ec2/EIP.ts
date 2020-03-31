import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type EIPAttributes = { AllocationId: Attribute<string> }
export function eIP(eIPProps: EIP): EIP & { attributes: EIPAttributes } { return ({ ...eIPProps, _logicalType: 'AWS::EC2::EIP', attributes: { AllocationId: 'AllocationId' } }) }

export interface EIP extends KloudResource {
    domain?: Value<string>;
    instanceId?: Value<string>;
    publicIpv4Pool?: Value<string>;
    tags?: Tag[];
}