import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function host(hostProps: Host & { logicalName?: string }): Host { return ({ ...hostProps, _logicalType: 'AWS::EC2::Host' }) as unknown as Host }

export interface Host extends KloudResource {
    availabilityZone: Value<string>;
    instanceType: Value<string>;
    autoPlacement?: Value<string>;
    hostRecovery?: Value<string>;
}