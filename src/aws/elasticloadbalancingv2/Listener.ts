import { ActionProps } from './listener/ActionProps';
import { Value } from '../../kloudformation/Value';
import { CertificateProps } from './listenercertificate/CertificateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function listener(listenerProps: Listener & { logicalName?: string }): Listener { return ({ ...listenerProps, _logicalType: 'AWS::ElasticLoadBalancingV2::Listener' }) as unknown as Listener }

export interface Listener extends KloudResource {
    defaultActions: ActionProps[];
    loadBalancerArn: Value<string>;
    port: Value<number>;
    protocol: Value<string>;
    certificates?: CertificateProps[];
    sslPolicy?: Value<string>;
}