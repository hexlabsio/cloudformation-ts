import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type HostAttributes = {  }
export function host(hostProps: Host): Host & { attributes: HostAttributes } { return ({ ...hostProps, _logicalType: 'AWS::EC2::Host', attributes: {  } }) }

export interface Host extends KloudResource {
    availabilityZone: Value<string>;
    instanceType: Value<string>;
    autoPlacement?: Value<string>;
    hostRecovery?: Value<string>;
}