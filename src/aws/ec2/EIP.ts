import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function eIP(eIPProps: EIP & { logicalName?: string }): EIP { return ({ ...eIPProps, _logicalType: 'AWS::EC2::EIP' }) as unknown as EIP }

export interface EIP extends KloudResource {
    domain?: Value<string>;
    instanceId?: Value<string>;
    publicIpv4Pool?: Value<string>;
    tags?: Tag[];
}